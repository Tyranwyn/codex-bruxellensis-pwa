/*
const fs = require("fs");
const {S3} = require("aws-sdk");

let s3 = new S3({
  apiVersion: "2006-03-01",
  region: "eu-west-3"
});

const bucket = process.env.S3_BUCKET;
var params = {
  Bucket: bucket, /!* required *!/
};
s3.listObjectsV2(params, (err, data) => {
  if (err) console.log(err, err.stack); // an error occurred
  else {
    data.Contents.forEach(value => {
      s3.deleteObject({Key: value.Key, Bucket: bucket}, deleteErr => {
        if (deleteErr) console.log(deleteErr, deleteErr.stack);
        else console.log(value.Key + " succesfully removed");
      });
    });
    fs.readdirSync("dist").forEach(itemName => {
      fs.readFile("dist/" + itemName, (readErr, file) => {
        s3.putObject({
          Bucket: bucket,
          Key: itemName,
          Body: JSON.stringify(file, null, 2)
        }, (s3Err, data) => {
          if (s3Err) throw s3Err
          console.log(`File uploaded successfully ${itemName}`);
        });
      });
    });
  }
});
*/
const fs = require('fs');
const path = require('path');
const async = require('async');
const AWS = require('aws-sdk');
const readdir = require('recursive-readdir');

const BUCKET = process.env = process.env.S3_BUCKET;
const rootFolder = path.resolve(__dirname, './');
const uploadFolder = './dist';
const s3 = new AWS.S3({
  signatureVersion: 'v4',
  region: "eu-west-3"
});

function getFiles(dirPath) {
  return fs.existsSync(dirPath) ? readdir(dirPath) : [];
}

if (!BUCKET) {
  throw new Error('you must provide env. variables: [BUCKET]');
}

async function clearBucket() {
  return new Promise(resolve, reject => {
    s3.listObjectsV2(params, (err, data) => {
      if (err) console.log(err, err.stack); // an error occurred
      else {
        data.Contents.forEach(value => {
          s3.deleteObject({Key: value.Key, Bucket: bucket}, deleteErr => {
            if (deleteErr) console.log(deleteErr, deleteErr.stack);
            else console.log(value.Key + " succesfully removed");
          });
        });
      }
    })
  })
}

async function deploy(upload) {
  const filesToUpload = await getFiles(path.resolve(__dirname, upload));

  return new Promise((resolve, reject) => {
    async.eachOfLimit(filesToUpload, 10, async.asyncify(async (file) => {
      const Key = file.replace(`${rootFolder}/`, '');
      console.log(`uploading: [${Key}]`);
      return new Promise((res, rej) => {
        s3.upload({
          Key,
          Bucket: BUCKET,
          Body: fs.readFileSync(file),
        }, (err) => {
          if (err) {
            return rej(new Error(err));
          }
          res({result: true});
        });
      });
    }), (err) => {
      if (err) {
        return reject(new Error(err));
      }
      resolve({result: true});
    });
  });
}

clearBucket().then(() =>
  deploy(uploadFolder)
    .then(() => {
      console.log('task complete');
      process.exit(0);
    })
    .catch((err) => {
      console.error(err.message);
      process.exit(1);
    })
);


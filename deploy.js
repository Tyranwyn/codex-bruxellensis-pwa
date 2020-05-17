const fs = require('fs');
const path = require('path');
const async = require('async');
const AWS = require('aws-sdk');
const readdir = require('recursive-readdir');
const mime = require('mime-types');

const BUCKET = process.env.S3_BUCKET;
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
  throw new Error('you must provide env. variables: [S3_BUCKET]');
}

async function getBucketItems() {
  return new Promise((resolve, reject) => {
    s3.listObjectsV2({Bucket: BUCKET}, (err, data) => {
      if (err) {
        return reject(new Error(err));
      }
      resolve(data.Contents);
    })
  })
}

async function clearBucketItems(items) {
  for (const item of items) {
    await s3.deleteObject({Key: item.Key, Bucket: BUCKET}, err => {
      if (err) {
        console.error(err, err.stack);
        process.exit(1);
      } else console.log(item.Key + " succesfully removed");
    });
  }
}

async function deploy(upload) {
  let bucketItems = await getBucketItems();
  await clearBucketItems(bucketItems);

  const filesToUpload = await getFiles(path.resolve(__dirname, upload));

  return new Promise((resolve, reject) => {
    async.eachOfLimit(filesToUpload, 10, async.asyncify(async (file) => {
      const Key = file.replace(`${rootFolder}/dist/`, '');
      console.log(`uploading: [${Key}]`);

      return new Promise((res, rej) => {
        s3.putObject({
          Key,
          Bucket: BUCKET,
          Body: fs.readFileSync(file),
          ContentType: mime.lookup(file)
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

deploy(uploadFolder)
  .then(() => {
    console.log('task complete');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });

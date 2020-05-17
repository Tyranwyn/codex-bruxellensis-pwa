const fs = require('fs');
const path = require('path');
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

  for (let file of filesToUpload) {
    const Key = file.replace(`${rootFolder}/dist/`, '');
    console.log(`uploading: [${Key}]`);
    await s3.putObject({
      Key,
      Bucket: BUCKET,
      Body: fs.readFileSync(file),
      ContentType: mime.lookup(file)
    }, (err) => {
      if (err) {
        console.error(err, err.stack);
        process.exit(1);
      } else console.log(Key + " succesfully uploaded");
    });
  }
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

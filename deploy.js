const fs = require("fs");
const {S3} = require("aws-sdk");

let s3 = new S3({
  apiVersion: "2006-03-01",
  region: "eu-west-3"
});

const bucket = process.env.S3_BUCKET;
var params = {
  Bucket: bucket, /* required */
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
          console.log(`File uploaded successfully at ${data.Location}`);
        });
      });
    });
  }
});

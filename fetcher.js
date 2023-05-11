const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

request.get(url, (err, res, body) => {
  if (err) {
    console.error(`Error: ${err.message}`);
    return;
  }
  if (res.statusCode !== 200) {
    console.error(`Error: ${res.statusMessage}`);
    return;
  }
  fs.writeFile(filePath, body, (err) => {
    if (err) {
      console.error(`Error: ${err.message}`);
      return;
    }
    const fileSizeInBytes = Buffer.byteLength(body);
    console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ${filePath}`);
  });
});

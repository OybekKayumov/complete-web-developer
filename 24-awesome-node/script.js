const fs = require('fs');  // file system


fs.readFile('./hello.txt', (err, data) => {
  if (err) {
    console.log('error: ', );
  }

  console.log('data: ', data);
})

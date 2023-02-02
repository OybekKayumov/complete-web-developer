const fs = require('fs');  // file system
const { readFile } = require('fs/promises');

// readFile is asynchronous, and has CALL-BACK FUNCTION
fs.readFile('./hello.txt', (err, data) => {
  if (err) {
    console.log('error: ', );
  }

  console.log('1. ASYNC, data: ', data.toString());
})

// need encoding
// $ node script.js 
// data:  <Buffer 48 65 6c 6c 6f 20 74 68 65 72 65 21>  

// toString - utf8
// console.log('data: ', data.toString());
// data:  Hello there!

// 2
//! readFileSync is reading file, wait here till result, show it , and continue
const file = fs.readFileSync('./hello.txt')
console.log('2. SYNC, file: ', file.toString());

//! 2 -> 1
// 2. file:  Hello there!
// 1. data:  Hello there!
// import largeNumber from "./script2"; //! error
const largeNumber = require('./script2');

const a = largeNumber;
const b = 5;
console.log('a+b: ',a + b);
// a+b:  [object Object]5

//todo:
console.log(__dirname );

//todo:
// globalThis === window // true

// window - browser
// global - node version

// globalThis exists in both browser and window
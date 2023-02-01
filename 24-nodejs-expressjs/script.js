// import largeNumber from "./script2"; //! error
// const largeNumber = require('./script2'); [object Object]
const script2 = require('./script2.js');

// const a = largeNumber; // a+b:  [object Object]5
const a = script2.largeNumber; // a+b:  361
const b = 5;
console.log('a+b: ',a + b);
// a+b:  361

//todo:
console.log(__dirname );

//todo:
// globalThis === window // true

// window - browser
// global - node version

// globalThis exists in both browser and window
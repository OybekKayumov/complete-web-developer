const prompt = require("prompt-sync")();

// Number
// String
// Boolean
// undefined
// null
// Symbol
// Object

// typeof(10 + '24')
// 'string'

// 10 - '3'
// 7
// typeof(10 - '3')
// 'number'

// '3' +7
// '37'
// typeof('3' +7)
// 'string'

// {} == {}
// false
// {} === {}
// false

// 5 + '34'
//! '534'

// 5-'4'
// 1

// 10%5
// 0

//! 5%10
// 5
// 'java'+'script'
// 'javascript'

//! '' +''
// ''
// ' ' +' '
// '  '
// ''+0
// '0'
// ' '+0
// ' 0'

//! true + true
// 2
// true + false
// 1
// false  + true
// 1
// false-true
// -1

// 3-4
// -1

//! 'bob' - 'bill'
// NaN
// 5>=1
// true
// 0 === 1
// false
// 4 <=1
// false
// 1 != 1
// false
// 1 !== 1
// false

//! "A" > "B"
// false
// "B" < "C"
// true
// "a" > "A"
// true
// "b" < "A"
// false
// true === false
// false
// true != true
// false
// true !== true
// false

//TODO: VARIABLES
var firstName = 'John';
// prompt();


// calculator
let first = prompt("enter first number: ");
let second = prompt("enter second number: ");
let sum = Number(first) + Number(second);
console.log("the sum is ", sum);

// let pwd;
// undefined
// pwd
// undefined

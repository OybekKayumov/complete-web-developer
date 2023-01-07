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
// let first = prompt("enter first number: ");
// let second = prompt("enter second number: ");
// let sum = Number(first) + Number(second);
// console.log("the sum is ", sum);

// let pwd;
// undefined
// pwd
// undefined

//TODO: JS CONDITIONALS
let name = 'Susan';
if (name === "Billy") {
  console.log('Hi, Billy');
} else if (name === 'John') {
  console.log('Hi, John');
} else {
  console.log(`Hello, ${name}`);
}
// Hello, Susan 

//  ||, &&
name = 'John'
if (name === 'Billy' || name === 'John') {
  console.log('Hi Billy or John');
}
// Hi Billy or John

let fName = 'Billy';
let lName = 'John';
if (fName === 'Billy' && lName === 'John') {
  console.log('Hi Billy and John');
}
// Hi Billy and John

// !
if (!(name === "Bob")) {
  console.log('Hi, Bob');
}
// Hi, Bob

// todo:
// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:

//using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"

// car
let age = prompt("Enter your age: ");
if (+age < 18 ) {
  console.log("Sorry, you are too young to drive this car. Powering off");
} else if (+age > 18) {
  console.log("Powering On. Enjoy the ride!");
} else {
  console.log("Congratulations on your first year of driving. Enjoy the ride!");
}


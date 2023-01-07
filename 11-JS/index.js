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
/*
let age = prompt("Enter your age: ");
if (+age < 18 ) {
  console.log("Sorry, you are too young to drive this car. Powering off");
} else if (+age > 18) {
  console.log("Powering On. Enjoy the ride!");
} else {
  console.log("Congratulations on your first year of driving. Enjoy the ride!");
}
*/

// TODO: functions
// arguments are what's given to functions

// function declaration
function sayHello() {
  console.log('Hello!');
}
sayHello();

// function expression
const sayBye = function () {
  console.log('Bye!');
}
sayBye();

function sing() {
  console.log('Ahh');
  console.log('Tee');
}
sing();

function song(sing) {
  console.log(sing);  
}
song('laa dee daa');

//
function multiply(a, b) {
  //  a * b; // without return - undefined
  return a * b;
}

console.log(multiply(5, 10));

// functions can be a variables

// todo: parameters and arguments
multiply(5,6);  // 5 and 6 are arguments
// parameters are what a and b is

//
// Make a keyless car EVEN BETTER!
// We are improving our car from previous exercise now.
// Solutions to future exercises will be in the .js file (meaning Javascript file) from now on.
/*
function checkDriverAge(age) {  
  var age = prompt("What is your age?");  
  if (Number(age) < 18) {
    console.log("Sorry, you are too young to drive this car. Powering off");
  } else if (Number(age) > 18) {
    console.log("Powering On. Enjoy the ride!");
  } else if (Number(age) === 18) {
    console.log("Congratulations on your first year of driving. Enjoy the ride!");
  }
}
checkDriverAge();
*/

//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function every time?

//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.

//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
// checkDriverAge(92);
// it returns "Powering On. Enjoy the ride!"

const checkDriverAge2 = function() {  
  var age = prompt("What is your age?");
  if (Number(age) < 18) {
    return "Sorry, you are too young to drive this car. Powering off";
  } else if (Number(age) > 18) {
    return "Powering On. Enjoy the ride!";
  } else if (Number(age) === 18) {
    return "Congratulations on your first year of driving. Enjoy the ride!";
  }
}

// console.log(checkDriverAge2(29));
console.log( checkDriverAge2());
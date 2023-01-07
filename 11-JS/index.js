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
/*
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
*/
// console.log(checkDriverAge2(29));
// console.log( checkDriverAge2());

// TODO: JS data structures
// Array
const list =['tiger', 'cat', 'bear', 'bird'];
console.log( list[1]); // cat

const numbers = [1, 2, 3, true, function apple() {
  console.log('apple');
}, undefined, null, 'animals'];

console.log(numbers[4]);

console.log(numbers);
// [ 1, 2, 3, true, [Function: apple], undefined, null, 'animals' ] 

// nested
const listNested =[
  ['tiger', 'cat', 'bear', 'bird']
];
// bear
console.log(listNested[0][2]);

//
list2 = ['tiger', 'cat', 'bear', 'bird'];
list2.shift();
console.log(list2);
// [ 'cat', 'bear', 'bird' ]

list2.pop()
console.log(list2);
// [ 'cat', 'bear' ]

list2.push('elephant');
console.log(list2);
// [ 'cat', 'bear', 'elephant' ]

const list3 = list2.concat(['bee', 'deer'])
console.log(list2);
// [ 'cat', 'bear', 'elephant' ]
console.log(list3);
// [ 'cat', 'bear', 'elephant', 'bee', 'deer' ]

list3.sort();
console.log(list3);
// [ 'bear', 'bee', 'cat', 'deer', 'elephant' ]

// TODO: Objects
const user = {
  name: 'John',
  age: 34,
  hobby: 'soccer',
  isMarried: false,
}

console.log(user);
// { name: 'John', age: 34, hobby: 'soccer', isMarried: false }      
console.log(user.name, user.age, user.hobby, user.isMarried);
// John 34 soccer false

user.favoriteFood = 'spinach';
user.isMarried = true;

user.spells = ['abra', 'shazam', 'boo'];
console.log(user);
// {
//   name: 'John',
//   age: 34,
//   hobby: 'soccer',
//   isMarried: true,
//   favoriteFood: 'spinach',
//   spells: [ 'abra', 'shazam', 'boo' ]
// }

// 
const userList = [
  {
    username: 'andy',
    password: 'secret'
  },
  {
    username: 'jess',
    password: '123456'
  },  
]

console.log(userList);
// [
//   { username: 'andy', password: 'secret' },
//   { username: 'jess', password: '123456' }
// ]

console.log( user.spells[1]);       // shazam
console.log(userList[0].password ); // secret

//! function inside an object is a "method"
user.shout = function () { 
  console.log('Hey!');
}
console.log(user);            // shout: [Function (anonymous)]
console.log(user.shout());    // Hey!

let user2 = {};
console.log(user2);   // {}

let list4 = [];

//todo: null
var emptyObj = {};
var nullObj = null;

console.log(emptyObj);  // {}
console.log(nullObj);   // null, means there is nothing in this object

//* error with null
// nullObj.name = 'Joe'; 
// ! TypeError: Cannot set properties of null (setting 'name')

// but
emptyObj.name = 'Joe';
console.log(emptyObj.name);  // Joe

// 
let database = [
  {
    username: 'andrei',
    password: 'secret'
  }
];

const newsFeed = [
  {
    username: 'Bobby',
    timeline: "So tired from all that learning"
  },
  {
    username: 'Sally',
    timeline: "Js is so cool!"
  }
]
/*
const userNamePrompt = prompt("What is your username? ");
const passwordPrompt = prompt("What is your password? ");

function signIn(user, pwd) {
  if (user === database[0].username &&
      pwd === database[0].password
  ) {
    console.log(newsFeed);
  } else {
    console.log('Sorry, wrong username or password');
  }
}

signIn(userNamePrompt, passwordPrompt);
*/

//TODO: JS terminology
// function declaration
// function name(params) {
  
// }

// function expression
// const newFn = function name(params) {
  
// };

//! expression is smth that produces a value
/*
1+3;
let a = 2;
return true;

// calling or invoking
alert();
newFn(param1, param2);
console.log();

// assign a variable
let b = true;

// function vs method
const obj = {
  thisIsMethod: function () {
    
  }
}
// access to method
obj.thisIsMethod();
*/

//TODO: loops in js
const todos = [
  'clear room!',
  'brush teeth!',
  'exercise!',
  'study js!',
  'eat healthy!'
];
console.log('loop' );

const todosLength = todos.length;
for (let i = 0; i < todos.length; i++) {
  console.log(i, todos[i]);
  todos.pop()
}

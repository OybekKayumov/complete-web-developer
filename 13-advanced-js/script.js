// TODO: SCOPE

//! ROOT SCOPE
var fun = 5;

function funFunction() {
  //! CHILD SCOPE
  var fun = 'hellooo';
  console.log(1, fun);
}

function funnierFunction() {
  //! CHILD SCOPE
  var fun = 'byee';
  console.log(2, fun);
}

function funniestFunction() {
  //! CHILD SCOPE
  fun = 'ahhh';     // no var; and var was 5, and now modified and now 'ahhh'
  console.log(3, fun);
}

console.log(fun);
funFunction()
funnierFunction()
funniestFunction()

// 5
// 1 hellooo
// 2 byee
// 3 ahhh

console.log(fun);
// ahhh // ! in last fn we modified fun, so it is now 'ahhh'

// TODO: ternary operator
function isValid(bool) {
  return bool;
}

// const answer = isValid(true) ? 'You may enter' : 'Access denied';
// console.log(answer);  // You may enter

const answer = isValid(false) ? 'You may enter' : 'Access denied';
console.log(answer);  // Access denied

//todo: switch
function moveCommand(direction) {
  let whatHappens;
  switch (direction) {
    case 'forward':
      whatHappens = 'you encounter a monster'
      break;
    case 'back':
      whatHappens = 'you arrived home'
      break;
    case 'right':
      whatHappens = 'you found a river'
      break;
    case 'left':
      whatHappens = 'you run into a troll'
      break;
  
    default:
      whatHappens = 'please enter a valid direction'
  }

  return whatHappens;
}

console.log( moveCommand('forward') );
console.log( moveCommand('back') );
console.log( moveCommand('right') );
console.log( moveCommand('left') );

// change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
  if (winBattle()) {
      return 10;
  } else {
      return 1;
  }
}

// 
const winBattle = function () {}

const experiencePoints1 = winBattle ? 10 : 1;
console.log(experiencePoints1); // 10

// TODO: variables
// let and const

const player = 'bob'
let experience = 100;
let wizardLevel = false;
var varlevel = false;

if (experience > 90) {
  let wizardLevel = true;
  console.log('inside: ', wizardLevel);
  var varlevel = true;
  console.log('inside var: ', varlevel);
}
// inside:  true
// inside var:  true

console.log('outside: ', wizardLevel);  // false
// outside:  false

console.log('outside var: ', varlevel);
// outside var:  true

//todo: const
experience = 80
// player = 'sally'; //! TypeError: Assignment to constant variable.

const obj = {
  player: 'bob',
  experience: 100,
  wizardLevel: false,
}

obj.wizardLevel = true;
console.log(obj);
// { player: 'bob', experience: 100, wizardLevel: true }  //! true
// we can change object constant

// TODO: destructuring
// const player1 = obj.player;
// const experience1 = obj.experience;
// let wizardLevel1 = obj.wizardLevel;

const {player1, experience1} = obj;
let {wizardLevel1} = obj;
// this syntax same as 2 lines above, we select the properties we want from object 

//todo:
const name = 'john snow';

const obj2 = {
  [name]: 'hello',
  ['ray' + 'smith']: 'hihi',
  [1+2]: 'hey'
}

console.log(obj2);
// { '3': 'hey', 'john snow': 'hello', raysmith: 'hihi' }

//todo:
/*
const a = 'simon';
const b = true;
const c = {};

const obj3 = {
  a: a,
  b: b,
  c: c
}
// we can write as 
const obj4 = {
  a,
  b,
  c
}
*/

//todo: template strings
const greeting = `Hello, ${name}`;
console.log(greeting); // Hello, john snow

//todo: default arguments
function greet(name='', age=30, pet='cat') {
  return `Hi ${name} you seem to be ${age-5}. What a lovely ${pet} you have`
}

console.log( greet() );
// Hi  you seem to be 25. What a lovely cat you have

//TODO: Symbol
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

console.log(sym1);
console.log(sym2);
console.log(sym3);
// Symbol()
// Symbol(foo)
// Symbol(foo)

console.log( sym2 === sym3 ) // false
// symbols are used because they create completely uniq type

//TODO: arrow functions
const add = (a,b) => a + b;

// function add(a, b) {
//   return a + b;
// }


//TODO: advanced functions
const first = () => {
  const greet = 'hi';
  const second = () => {
    console.log(2, greet);
  }
  return second;
}

const newFunc = first();
// newFunc();
console.log('***********' );
// console.log('newFn: ', newFunc);
console.log('newFn(): ', newFunc());

//! closures - 
  // a function ran, 
  // the function executed
  // it's never going to execute again
  // BUT it's going remember that there are references o those variables
  // so the CHILD(second) scope always has access to the parent scope(first)

  // and parent scope doesn't have access to the child scope

const first2 = () => {
  const greet = 'hi';
  const second2 = () => {
    const name = 'bob';   // first2 fn doesn't have access to 'name'
    console.log(2, greet);
  }
  return second2;
}

const newFunc2 = first2();
console.log('***********' );
console.log('newFn2(): ', newFunc2());

//! currying
// process of converting a function that takes multiple arguments
// into a function takes them one at a time
const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
// console.log( curriedMultiply(3) ); // (3) => (b) => 3 * b;

console.log( curriedMultiply(3)(4) ); // (3) => (4) => 3 * 4;
// 12
const multiplyBy5 = curriedMultiply(5);

// now
console.log( multiplyBy5(10) );  // 50

//! compose
const compose = (f, g) => (a) => f(g(a));
// f is a function
// g is a function

const sum = (num) => num + 1;

console.log( compose(sum, sum)(5) );  // 7
// f --> sum
// g --> sum
// a --> 5
// 1. f(g(5))
  // f(sum(5))
  // f(6) <--> f(sum(5+1))
// 2. f(6)
  // sum(6)
  // sum(6+1)
  // f(7) // ! 7

//! avoiding side effects, functional purity

// side effect example
let x = 1;
function y() {
  x = 2;       // ! changes x
}

// "functional purity" is always return a value(something), not 'undefined'
// power in returning a value is 
  // by avoiding side effect and always returning we create smth that we call 
  // DETERMINISTIC - means no matter what, if our input go through this function
  // return value will be always the SAME

//!try to create functions that minimized side effects

//! What are the two elements of a pure function?
// 1. Deterministic --> always produces the same results given the same inputs
// 2. No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements.

//TODO: advanced arrays
const arr = [1,2,10,16];

const doubled = [];
const newArr = arr.forEach(num => {
  doubled.push(num * 2);
})

console.log('forEach: ', doubled); // [ 2, 4, 20, 32 ]

//! map, filter, reduce
const mapArr = arr.map(num => {
  return num * 2;
})
console.log('mapArr: ', mapArr );
// mapArr:  [ 2, 4, 20, 32 ]
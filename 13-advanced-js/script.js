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

//! map, filter, reduce: NO SIDE EFFECT
// map() method creates a new array populated with the results of calling a provided function on every element in the calling array
const mapArr = arr.map(num => {
  return num * 2;
})
console.log('mapArr: ', mapArr );
// mapArr:  [ 2, 4, 20, 32 ]

//! without return
// mapArr:  [ undefined, undefined, undefined, undefined ]

//! filter returns new Array
// filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function

const filterArr = arr.filter(num => {
  return num > 5
})
console.log('filterArr: ', filterArr); // filterArr:  [ 10, 16 ]

//! reduce
// reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value
const reduceArr = arr.reduce((acc, curr) => {
  return acc + curr;
}, 0)

console.log('reduceArr: ', reduceArr); // 29

//TODO: advanced object
// reference type
// context
// instantiation

//! reference type
console.log('***advanced object***');
console.log( [] === [] );   // false, 2 different data structures
console.log( [1] === [1] ); // false

//
const object1 = {val: 10};
const object2 = object1;     // reference to object1
const object3 = {val: 10};   // new object3

console.log(object1 === object2); // true
console.log(object1 === object3); // false

object1.val = 15;
console.log(object2.val);  // 15
console.log(object3.val);  // 10

// objects are 'reference types' in JS
// numbers, boolean, undefined, null, symbol are primitive type, defined by programming language

// example
let number1 = 1; 
let number2 = 2; 

//! context vs scope
function b() {
  let aaa = 4;
}
// console.log('aaa', aaa); //! ReferenceError: aaa is not defined, scope

console.log(this);  // Window object
//! "this" means what is the object environment that we're in right now
// what is the LEFT of the DOT: window.alert('hi'), "."
// this.alert('hi) is same
// .alert()
// "this" refers to what object it's inside of

//examples
function aa() {
  console.log(this);
}

aa();  // Window

//! new value for this
const object4 = {
  a: function () {
    console.log('this obj4: ', this);
  }
}

console.log( object4.a())  // this obj4:  {a: ƒ}


//! instantiation
// make instance of objects
class Player {
  constructor(name, type) {
    console.log('Player this: ', this);
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi, I am ${this.name}, and I am a ${this.type}`);
  }
}

// constructor runs first and create (name and type) properties on Player object
//reason we use "this" here - we can access to name and type property

class Wizard extends Player {
  constructor(name, type) {
    super(name, type)
  }

  play() {
    console.log(`Weee I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard('Shelly', 'Healer')
const wizard2 = new Wizard('Shawn', 'Dark MAgic')

//* Player this:  Wizard {}  // ! ?
// steps, run:
// 1 const wizard1 = new Wizard('Shelly', 'Healer')
// 2 super(name, type) in Wizard
// 3 console.log('Player this: ', this);  // Wizard
// 4  introduce() {
    // console.log(`Hi, I am ${this.name}, and I am a ${this.type}`);
  // }
// 5  play() {
  //   console.log(`Weee I'm a ${this.type}`);
  // }


//TODO: Pass by Value and Pass by Reference
let i = 5;
// let k = 10;
let k = i;
k++;
console.log('i: ', i); // 5
console.log('k: ', k); // 6
//todo: Pass by Value
// we copied value(5) and paste it in new memory space(k=5)
// no connection with two values i=5 and k=5;
// pass by value means we copy the value and we create that value somewhere else in memory

//todo: Pass by Reference
let objNew1 = {name: 'Yao', pwd: '123'};
let objNew2 = objNew1;

objNew2.pwd = 'easy-pwd';
console.log('objNew1: ', objNew1 ); 
console.log('objNew2: ', objNew2 ); 
// objNew1:  {name: 'Yao', pwd: 'easy-pwd'}   // ! same pwd
// objNew2:  {name: 'Yao', pwd: 'easy-pwd'}   // ! same pwd

// Objects in JavaScript are stored in memory and are passed by reference 
// which means we DON'T COPY the values like in "primitive types"
// objNew1 and objNew2 are pointing to same Object {name: 'Yao', pwd: '123'}

//!example 2
let c1 = [1,2,3,4,5];
let d1 = c1;
d1.push(1897231);
console.log('d1: ', d1);
console.log('c1: ', c1);
// d1:  (6) [1, 2, 3, 4, 5, 1897231]    // !
// c1:  (6) [1, 2, 3, 4, 5, 1897231]    // !

// let d2 = [].concat(c);  // c1 is NOT changed, d2 changed

// let newObj = {a: 'a', b: 'b', c: 'c'};
let newObj = {
  a: 'a', 
  b: 'b', 
  c: {
    deep: 'try and copy me'
  }
};
// newObj.c = 5;
let clone = Object.assign({}, newObj);  // clone object
console.log('clone: ', clone);
// clone:  {a: 'a', b: 'b', c: 'c'}   // ! no effect, (c: c)

// but
let clone2 = newObj; //! reference to same object
console.log('clone2: ', clone2);     //! clone2:  {a: 'a', b: 'b', c: 5}, c:5

//! spread operator
let clone3 = {...newObj};
console.log('clone3: ', clone3 );   // clone3:  {a: 'a', b: 'b', c: 5}

let superClone = JSON.parse(JSON.stringify(newObj));

// newObj.c = 5;
newObj.c.deep = 'hahaha';
console.log('newObj: ', newObj);

// newObj:  {a: 'a', b: 'b', c: 5}
// clone:  {a: 'a', b: 'b', c: 'c'}
// clone2:  {a: 'a', b: 'b', c: 'c'}
// clone3:  {a: 'a', b: 'b', c: 'c'}

// let superClone = JSON.parse(JSON.stringify(newObj));
console.log('superClone: ', superClone);  //! not changed

//TODO: Type Coercion
// convert certain types, when we use '=='
//! 1 == '1' // true

// === compare, but do not convert
//! 1 === '1'  // false

if (1) {
  console.log('if 1: ', 5);
}
//5, because JS coerces 1 to true

if (0) {
  console.log('if 0: ', 5);
}
// undefined

// -0 === +0         // true
// Object.is(-0, +0) // false

// NaN === NaN // false
// NaN == NaN  // false

//todo: Evaluate these:
//#1
// [2] === [2] // false
// [2] == [2]  // false

// {} === {}      // false
// {} == {}      // false

//#2 what is the value of property a for each object.
const object11 = { a: 5 }; 
const object22 = object11; 
const object33 = object22; 
const object44 = { a: 5}; 
object11.a = 4;

// object11  a:4
// object22  a:4
// object33  a:4
// object44  a:5
console.log('obj11: ', object11, object22, object33, object44);
// obj11:  {a: 4} {a: 4} {a: 4} {a: 5}

//#3 create two classes: an Animal class and a Mammal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mammal extends Animal {
  constructor(name, type, color) {
    super(name, type, color)
  }

  sound() {
    console.log(`Moo, I'm ${this.name}, and I'm a ${this.color} ${this.type}`);
  }
}

const cow = new Mammal('Shelly', 'cow', 'brown');
console.log('cow: ', cow);
console.log('cow: ', cow.sound());
// cow:  Mammal {name: 'Shelly', type: 'cow', color: 'brown'}
// Moo, I'm Shelly, and I'm a brown cow

//todo: includes()
'Hellooo'.includes('o');  // true

const pets = ['cat', 'dog', 'cow'];
pets.includes('dog');  // true
pets.includes('birds');  // true

//todo: exponential operator
const square = (x) => x**2;
const cube = (y) => y**3;

//todo: Solve the below problems:

// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.includes('John');  // false

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that name or names in an array.
const dragons1 = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons1.filter(name => name.includes('John'));  // Johnathan

// #3) Create a function that calculates the power of 100 of a number entered as a parameter
const calc = (num) => num**100 ;

// #4) Using your function from #3, put in the parameter 10000. What is the result?
console.log( calc(10) );    // 1e+100 
console.log( calc(10000) ); // Infinity
// Research for yourself why you get this result


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

//TODO: padStart, padEnd
'turtle'.padStart(10);  // '    turtle'
'turtle'.padEnd(10);    // 'turtle    '

// Object.values
// Object.entries
// Object.keys

let userObj = {
  username0: 'santa',
  username1: 'dave',
  username2: 'grinch',
}

Object.keys(userObj).forEach((key, ind) => {
  console.log(key, userObj[key] );
})

// username0 santa
// username1 dave
// username2 grinch

Object.values(userObj).forEach((value) => {
  console.log(value);
})
// santa
// dave
// grinch

Object.entries(userObj).forEach((value) => {
  console.log(value);
})
// (2) ['username0', 'santa']
// (2) ['username1', 'dave']
// (2) ['username2', 'grinch']

const mod = Object.entries(userObj).map((value) => {
  return value[1] + value[0].replace('username', '');
})
console.log('modified: ', mod);
// modified:  (3) ['santa0', 'dave1', 'grinch2']

//todo: Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'
turtle = turtle.padStart(8);
rabbit = rabbit.padStart(8);

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);
//      ||<- Start line
//        🐢
//        🐇

// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');
console.log('turtle2: ', turtle); 
// 🐢=======


// #3) Get the below object to go from:
let objN3 = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

const str = Object.entries(objN3).map((value) => value.join(" ")).join(' ');
console.log('str: ', str);
// str:  my name is Rudolf the raindeer

// TODO: flat();
const arrNew2 = [1,[2,3],[4,5]];
arrNew2.flat(); // return no nested array
// [1,2,3,4,5]

// .flat(2) // nested array layers

//! flatMap()
// flat and map

//! trimStart()
//! trimEnd()
// no blank spaces

//! fromEntries
let userProfiles = [['Tom', 23], ['Lander', 40], ['hansen', 34]]
const userProf = Object.fromEntries(userProfiles);
// opposite
const userProfEnt = Object.entries(userProf);

console.log('userProf: ', userProf);
// userProf:  {Tom: 23, Lander: 40, hansen: 34}
console.log('userProfEntries: ', userProfEnt);
// userProfEntries:  (3) [Array(2), Array(2), Array(2)]
// [['Tom', 23], ['Lander', 40], ['hansen', 34]]

//! try-catch
try {
  4+5
} catch (error) {
  // if any error
  console.log(error);
}

// 9

try {
  joe + 'hi'
} catch (error) {
  // if any error
  console.log(error);
}
//! ReferenceError: joe is not defined

//todo: Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array2 = [[1],[2],[3],[[[4]]],[[[5]]]]
// array2.flat(2);
console.log('flat 3: ', array2.flat(3));
// flat 3:  (5) [1, 2, 3, 4, 5]

// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting2 = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];

console.log('flatMap: ', greeting2.flatMap(str => str.join(' ')));
// (3) ['Hello young grasshopper!', 'you are', 'learning fast!']

//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
console.log('flatMap2: ', greeting2.flatMap(str => str.join(' ')).join(' '));
// flatMap2:  Hello young grasshopper! you are learning fast!

//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
console.log('Infinity: ', trapped.flat(Infinity) );
// Infinity:  [3]

//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
console.log('trimmed: ', userEmail3.trimStart().trimEnd());
// cannotfillemailformcorrectly@gmail.com

//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }
const userArray = Object.entries(users);
console.log('userArray: ', userArray);
//* userArray:  
// 0:(2) ['user1', 18273]
// 1:(2) ['user2', 92833]
// 2:(2) ['user3', 90315]

//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
const updateUsers = userArray.map(user => [user[0], user[1] * 2]);
console.log('updateUsers: ', updateUsers);
// 0:(2) ['user1', 36546]
// 1:(2) ['user2', 185666]
// 2:(2) ['user3', 180630]

//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
const userBack = Object.fromEntries(updateUsers);
console.log('userBack: ', userBack);
// userBack:  {user1: 36546, user2: 185666, user3: 180630}


//TODO: loops
const basket = ['apples', 'oranges', 'grapes'];

basket.forEach(item => {
  console.log('item: ', item);
})

//! for-of
// combined for and forEach
// iterating arrays and strings
for(item of basket) {
  console.log(item);
}

for(item of 'basket str') {
  console.log(item);
}

//! for-in
// works with Objects, object properties, 
// enumerating - objects, NOT iterable
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

for (item in detailedBasket) {
  console.log('detailed: ', item);
}

// basket is like:
// basket2 = {
//   0: apples,
//   1: orange,
//   2: grapes
// }

//todo: exercise
const basket3 = ['apples', 'oranges', 'grapes'];
const detailedBasket3 = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket3) {
  console.log(item);
}

for (item of basket3) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const ar = [-1,0,3,100, 99, 2, 99] // should return 100
const ar2 = ['a', 3, 4, 2] // should return 4
const ar3 = [] // should return 0

function biggestNumberInArray(arr) {
  let highest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (highest <  arr[i]) {
      highest = arr[i]
    }    
  }
  return highest;
}

function biggestNumberInArray2(arr) {
  let highest = 0;
  arr.forEach(item => {
    if (highest < item ) {
      highest = item
    }
  })
  return highest;
}

function biggestNumberInArray3(arr) {
  let highest = 0;
  for (item of arr) {
    if (highest < item ) {
      highest = item
    }  
  }
  return highest;
}


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {
  for (item in basket) {
    if (item === lookingFor) {
      return `${lookingFor} is in your basket`
    }
  }
  return 'that does not exist in your basket'
}

//TODO: BigInt, Nullish Coalescing operator, optional chaining operator, promise, globalThis

// typeof BigInt
// 'function'
// typeof 1n
// 'bigint'

// Number.MAX_SAFE_INTEGER
// 9007199254740991

// 9007199254740991n + 10n  // works
// 9007199254740991 + 10    // err

// 1n + 2n 
// 3n typeOf bigint


//todo: optional chaining operator
let will_pokemon = {
  pikachu: {
    species: 'Mouse',
    height: 0.4,
    weight: 6
  }
}

let weight = will_pokemon.pikachu.weight;
console.log('weight: ', weight);
// weight:  6

let and_pokemon = {
  // raichu: {
  pikachu: {
    species: 'Mouse',
    height: 0.8,
    weight: 30,
    power: 'lightning'
  }
}

let weight2 = and_pokemon.pikachu.weight;
// or
/*
if (and_pokemon.pikachu && and_pokemon.pikachu.weight) {
  let weight2 = and_pokemon.pikachu.weight;
} else {
  let weight2 = undefined
  console.log(': ', weight2);
}
*/
// or check for properties with "?"
let weight3 = and_pokemon?.pikachu?.weight
console.log('weight3: ', weight3);
// weight3:  30

// todo: Nullish Coalescing operator 
let power = and_pokemon?.pikachu?.power || 'no power'
//! if power: '', 0, no data --> 'no power', 
// no or undefined
console.log('power: ', power);


//todo: Exercise 1: what do you think the MIN_SAFE_INTEGER is?
console.log(Number.MAX_SAFE_INTEGER) //9007199254740991
console.log(Number.MIN_SAFE_INTEGER) // -9007199254740991

// Exercise 2: why does this throw an error? How can you fix it?
// 3 + 4 + 1n
3n + 4n + 1n
3 + 4 + 1
// Both produce the value of 8, but one is a Number type, the other is a BigInt type

// Exercise 3: Clean up this code using optional chaining
let will_pokemon1 = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6,
        power: 'lightning',
        friend: { 
            charizard: {
                species: 'Dragon Pokemon',
                height: 1.7,
                weight: 90.5,
                power: 'fire'
            }
        }
    }
}

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: ''
    }
}

if (andrei_pokemon && andrei_pokemon.raichu && will_pokemon 
    && will_pokemon.pikachu && will_pokemon.pikachu.friend 
    && will_pokemon.pikachu.friend.charizard) {
        console.log('fight!')
    } else {
        console.log('walk away...')
    }

if (andrei_pokemon?.raichu && will_pokemon?.pikachu?.friend?.charizard) {
      console.log('fight!')
  } else {
      console.log('walk away...')
  }
  
// Exercise 4: What do these each output?
console.log(false ?? 'hellooo')             // false
console.log(null ?? 'hellooo')              // hellooo
console.log(null || 'hellooo')              // hellooo
console.log((false || null) ?? 'hellooo')   // hellooo
console.log(null ?? (false || 'hellooo'))   // hellooo

//! replaceAll()
const newStr = 'js is the best';
const repl = newStr.replaceAll('best', 'good');
console.log(newStr, repl);
// js is the best js is the good

//TODO: debugging
const flattened = [[0,1], [2,3], [4,5]].reduce(
  (acc, arr) => {
    // console.log(arr);
    // console.log(acc);
    // debugger
    // return [].concat([0,1])
    return acc.concat(arr);
}, [])
console.log('flattened: ', flattened);
// flattened:  (6) [0, 1, 2, 3, 4, 5]

// TODO: How JS works
const one = () => {
  const two = () => {
    console.log('4');
  }
  two();
}
console.log( one() );
//* 4

// steps
// 3 console.log('4')   // 4 remove from call stack
// 2 two()              // 5 remove from call stack
// 1 one()              // 6 remove from call stack
// call stack

console.log('1');
setTimeout(() => {
  console.log('2');
}, 1000)
console.log('3');
//1
//3
//2


// call stack

// web api

// callback queue

// event loop

// run callback fn (here arrow fn)
// element.addEventListener('click', () => {
//   console.log('clicked');
// })

//TODO Modules
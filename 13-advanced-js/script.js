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


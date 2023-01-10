// change everything below to the newer Javascript!

// let + const
// var a = 'test';
// var b = true;
// var c = 789;
// a = 'test2';
//
// let a = 'test'
// const b = true;
// const c = 789;
// a = 'test2'

// Destructuring
var person = {
    firstName1 : "John",
    lastName1  : "Doe",
    age1       : 50,
    eyeColor1  : "blue"
};

var firstName1 = person.firstName1;
var lastName1 = person.lastName1;
var age1 = person.age1;
var eyeColor1 = person.eyeColor1;
//
const {firstName2, lastName2, age2, eyeColor2} = person;


// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};
//
var okObj = {
  a,
  b,
  c
};

// Template strings
/*
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
//
const message2 = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;
*/

// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}
//
function isValidAge1(age=10) {
  return age
}


// Symbol
// Create a symbol: "This is my first Symbol"
let mySymbol = Symbol("This is my first Symbol")

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

const whereAmI1 = (username, location) => {
  return username && location ? "I am not lost" : "I am totally lost"
} 

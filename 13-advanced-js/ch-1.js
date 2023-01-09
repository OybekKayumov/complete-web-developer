// For all of these, what is the value of a when the function gets called with the alert()
// #1
/*
function q1() {
  var a = 5;
  if ( a > 1) {
    a = 3
  }
  console.log(a);
}
q1();  // 3
*/
/*
// 2
var a = 0;
function q2() {
  a = 5
}

function q22() {
  console.log(a);
}
q2();  // if not run this fn, answer is 0
q22(); // if run this fn, answer is 5
*/
/*
// 3
function q3() {
  window.a = 'hello'
}

function q32() {
  console.log(a);
}
// q32(); //! a is not defined without q3()

q3();
q32(); //! hello
*/
/*
// 4
var a = 1;
function q4() {
  var a = 'test';
  console.log(a);
}
q4();  // test
*/
// 5
var a = 2;
if (true) {
  var a = 5;
  console.log(a);  // 5
}
console.log(a);    // 5
// with var keyword, if statements do not create a new scope
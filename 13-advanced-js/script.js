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

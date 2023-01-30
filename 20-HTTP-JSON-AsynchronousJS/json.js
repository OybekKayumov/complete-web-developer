// JSON: JavaScript Object Notation

// JSON is a syntax for storing and exchanging data
//   -it's used to send data between machines
//   - there's also XML. Both XML and JSON can be used to recieve data from a web-server

// JSON is text, written with JavaScript object notation

/*
JSON.parse()
let obj = JSON.parse('{"name":"John", "age":30, "city": "New York"}')

JSON.stringify()
let myJSON = JSON.stringify(obj)
*/

// JSON.stringify() will be sent over HTTP to the web-server
// on web-server JSON.parse(obj) 
// data will be processed and return to user
// on user JSON.parse() with new data

//! AJAX
// read from a web-server after page has loaded and update a page without reloading the page. and send data in the background while user is interacting with web-site
// AJAX is technology - a method of combining pieces together to achieve this
// and allow web-pages and web-applications to change content dynamically

// old way - XML
// jQuery
// new way - fetch
  // fetch get, post, put, delete

// 1 user login
    // send request to server
    // server sends response back to page
// 2 response is read by JS and user is able to login
    // at the same time only updating a small portion of the window

//!
// fetch(url) returns a JSON object
// get Promise
// .then (res.json), also get Promise
// .then (data)   


// Promise is an object that may produce a single value some time in the future
// either a resolved value or a reason that it's not resolved(rejected)
// 3 possible states of promises are:
  // fulfilled, rejected, pending

//! callbacks and many nested functions, hard to read a code
// Promise example
/*
moviePlayer(100, 'Left')
  .then(() =>movePlayer(400, 'Left'))
  .then(() =>movePlayer(10, 'Right'))
  .then(() =>movePlayer(330, 'Left'))
*/

// todo
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve('stuff worked')
  } else {
    reject('error, it broke')
  }
})

promise.then(result => console.log('result: ', result))
       .catch(() => console.log('error: ')) 
// result:  stuff worked

//
const promise2 = new Promise((res, reject) => {
  setTimeout(res, 100, 'Hi')
})

const promise3 = new Promise((res, reject) => {
  setTimeout(res, 1000, 'Hey')
})

const promise4 = new Promise((res, reject) => {
  setTimeout(res, 3000, 'Hello')
})

Promise.all([promise, promise2, promise3, promise4])
  .then(values => {
    console.log('values: ', values);
  })

// values:  [ 'stuff worked', 'Hi', 'Hey', 'Hello' ]

// todo
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums',
]

Promise.all(urls.map(url => {
  return fetch(url).then(resp => resp.json())
})).then(results => {
  console.log(': ', results[0])
  console.log(': ', results[1])
  console.log(': ', results[2])
}).catch(() => console.log('error: ' ))

// output
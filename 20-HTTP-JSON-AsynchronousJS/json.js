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

//TODO:
// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promiseN1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 4000)    
})

// #2) Run the above promise and make it console.log "success"
promiseN1.then(console.log)
// or
promiseN1.then(resp => console.log(resp))

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console login "success"
const promiseN2 = Promise.resolve(
  setTimeout(() => {
    console.log('success');
  }, 4000)
)

// #4) Catch this error and console log 'Ooops something went wrong'
// Promise.reject('failed').catch(console.log('Ooops something went wrong'))

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls2 = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]

Promise.all(urls2.map(
  url => fetch(url).then(people => people.json())
)).then(arr => {
  console.log('1: ', arr[0]);
  console.log('2: ', arr[1]);
  console.log('3: ', arr[2]);
  console.log('4: ', arr[3]);
}).catch(err => console.log('fix it!: ', err ))

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?
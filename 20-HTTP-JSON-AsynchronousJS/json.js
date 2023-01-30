// JSON: JavaScript Object Notation

// JSON is a syntax for storing and exchanging data
//   -it's used to send data between machines
//   - there's also XML. Both XML and JSON can be used to recieve data from a web-server

// JSON is text, written with JavaScript object notation

JSON.parse()
let obj = JSON.parse('{"name":"John", "age":30, "city": "New York"}')

JSON.stringify()
let myJSON = JSON.stringify(obj)

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


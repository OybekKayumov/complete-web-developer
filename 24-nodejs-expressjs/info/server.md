const http = require('http');
const { url } = require('inspector');

const server = http.createServer((request, response) => {
  // console.log('I hear you! Thanks for the request');
  // console.log("headers ", request.headers);
  console.log('method', request.method);
  console.log('url', request.url);

  response.setHeader('Content-Type', 'text/html');
  response.end('<h1>Hello</h1>')
})

server.listen(3000);

// 2
const http = require('http');
const { url } = require('inspector');

const server = http.createServer((request, response) => {
  // console.log("headers ", request.headers);
  console.log('method', request.method);
  console.log('url', request.url);

  const user = {
    name: 'John',
    hobby: 'Skating',
  }

  response.setHeader('Content-Type', 'application/json');
  // response.end('<h1>Hello</h1>')
  response.end(JSON.stringify(user))
})

server.listen(3000);

// 3
const express = require('express');

const app = express();

app.get('/signin', (req, res) => {
  res.send("<h1>hello</h1>")
})
app.listen(3000);

// 4
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const user = {
    name: 'Sally',
    hobby: 'soccer',
  }
  res.send(user)
})
app.listen(3000);

// 5
const express = require('express');

const app = express();

app.get('/', (req, res) => {  
  res.send('getting root')
})
app.get('/profile', (req, res) => {  
  res.send('getting profile')
})
app.post('/profile', (req, res) => {  
  const user = {
    name: 'Sally',
    hobby: 'soccer'
  }
  res.send(user)
})
app.listen(3000);

// 6
const express = require('express');

const app = express();

// middleware
app.use((req, res, next) => {
  console.log('helloo: ');
  next();
})

app.get('/', (req, res) => {  
  res.send('testtest')
})

app.listen(3000);

// 7
const express = require('express');
const bodyParser = require('body-parser')

const app = express();

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json())
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {  
  res.send('getting root')
})
app.get('/profile', (req, res) => {  
  res.send('getting profile')
})
app.post('/profile', (req, res) => {  
  console.log(req.body );
  
  res.send('Success!')
})
app.listen(3000);


// const user = {
//   name: 'Player',
//   hobby: 'soccer'
// }
// res.send(user)
// app.use(express.urlencoded({extended: false}));
// app.use(express.json());

// TODO: REST API defines a set of functions which developers can perform requests and receive responses via HTTP protocol such as GET, POST, PUT, DELETE

//  8
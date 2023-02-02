const express = require('express');
const bodyParser = require('body-parser')

const app = express();

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json())
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {  
  // console.log( req.query )
  
  // req.body
  console.log( req.headers )
  // req.params
  res.send('getting root')
})

app.listen(3000);

//todo: REST API query
// console.log( req.query )
// http://localhost:3000/?name=andrei&age=31
// { name: 'andrei', age: '31' }

// const user = {
//   name: 'Player',
//   hobby: 'soccer'
// }
// res.send(user)
// app.use(express.urlencoded({extended: false}));
// app.use(express.json());

// TODO: REST API defines a set of functions which developers can perform requests and receive responses via HTTP protocol such as GET, POST, PUT, DELETE

//  
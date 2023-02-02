const express = require('express');
const bodyParser = require('body-parser')

const app = express();

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json())
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/:id', (req, res) => {  
  // console.log( req.query )  
  // req.body
  // console.log( req.headers )
  // res.send('getting root')

  console.log( req.params )
  res.status(404).send('not found!')
})

app.listen(3000);

//todo: REST API query
// console.log( req.query )
// http://localhost:3000/?name=andrei&age=31
// { name: 'andrei', age: '31' }

//todo: REST API params
// http://localhost:3000/1234
// console.log( req.params )
// { id: '1234' }


// const user = {
//   name: 'Player',
//   hobby: 'soccer'
// }
// res.send(user)
// app.use(express.urlencoded({extended: false}));
// app.use(express.json());

// TODO: REST API defines a set of functions which developers can perform requests and receive responses via HTTP protocol such as GET, POST, PUT, DELETE

//  
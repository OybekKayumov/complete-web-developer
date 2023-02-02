const express = require('express');
const bodyParser = require('body-parser')

const app = express();

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json())
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {  
  req.query
  req.body
  req.headers
  req.params
  res.send('getting root')
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

//  
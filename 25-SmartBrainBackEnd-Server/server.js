const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

// knexjs import and run
const knex = require('knex');
// modules
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db_postgres = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    port: 5432,   
    user : 'postgres',
    password : '',
    database : 'smart-brain'
  }
});

// console.log(postgres.select('*').from('users'));
// db_postgres.select('*').from('users').then(data => {
//   console.log(data);
// })

const app = express();
app.use(bodyParser.json())
app.use(cors());

/*
const database = {
  users: [
    {
      id: '123',
      name: 'John',
      email: 'john@gmail.com',
      password: 'cookies',
      entries: 0,
      joined: new Date()
    },
    {
      id: '124',
      name: 'Sally',
      email: 'sally@gmail.com',
      password: 'bananas',
      entries: 0,
      joined: new Date()
    }
  ],
  login: [
    {
      id: '987',
      hash: '',
      email: 'john@gmail.com'
    }
  ]
}
*/

app.get('/', (req, res) => {
  res.send(database.users)
})

// sign-in
app.post('/signin', (req, res) => {signin.handleSignIn(req, res, db_postgres, bcrypt)}  )

// register
app.post('/register', (req, res) => {register.handleRegister(req, res, db_postgres, bcrypt)} )

// profile
app.get('/profile/:id', (req, res) => {profile.handleProfileGet(req, res, db_postgres)} )

// image
app.put('/image', (req, res) => {image.handleImage(req, res, db_postgres)})
app.put('/imageurl', (req, res) => {image.handleApiCall(req, res)})

// listen
app.listen(3000, () => {
  console.log('app is running on port 3000...');
})

/* 
  /                   root
  /signin             POST success/fail
  /register           POST user
  /profile/:userId    GET  user
  /image              PUT  user update
*/

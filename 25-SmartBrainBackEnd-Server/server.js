const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');

const app = express();
app.use(bodyParser.json())

const database = {
  users: [
    {
      id: '123',
      name: 'John',
      email: 'john@gmail.com',
      // password: 'cookies',
      entries: 0,
      joined: new Date()
    },
    {
      id: '124',
      name: 'Sally',
      email: 'sally@gmail.com',
      // password: 'bananas',
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

app.get('/', (req, res) => {
  // res.send('this is working')
  res.send(database.users)
})

// sign-in
app.post('/signin', (req, res) => {

  // Load hash from your password DB, check if pwd correct.
  bcrypt.compare("apples", '$2a$10$xAY6i0l/3iZIajZ66BI9b.NjM50q2JZuXlaBEzRfejUvXocOqeGsi', function(err, res) {
    // res == true
    console.log('first guess', res)
  });
  bcrypt.compare("veggies", '$2a$10$xAY6i0l/3iZIajZ66BI9b.NjM50q2JZuXlaBEzRfejUvXocOqeGsi', function(err, res) {
    // res = false
    console.log('second guess', res)
  });

  if (req.body.email === database.users[0].email 
      && req.body.password === database.users[0].password 
    ) {
      res.json('success')
  } else {
    res.status(400).json('error logging in...')
  }
})

// register
app.post('/register', (req, res) => {
  const { email, name, password } = req.body;

  // bcrypt.hash(password, null, null, function(err, hash) {
  //   // Store hash in your password DB.
  //   console.log(hash)
  // });

  database.users.push(
    {
      id: '125',
      name: name,
      email: email,
      password: password,
      entries: 0,
      joined: new Date()
    }
  )

  res.json(database.users[database.users.length-1])
})

// profile
app.get('/profile/:id', (req, res) => {
  const { id } = req.params;
  let found = false;

  database.users.forEach(user => {
    if (user.id === id) {
      found = true;
      return res.json(user)
    } 
  })
  if (!found) {
    res.status(400).json('not found...')
  }
})

// image
app.put('/image', (req, res) => {
  const { id } = req.body;
  let found = false;

  database.users.forEach(user => {
    if (user.id === id) {
      found = true;
      user.entries++;
      return res.json(user.entries);
    }
  })
  if (!found) {
    res.status(400).json('not found img ...')
  }
})

// bcrypt-nodejs
// bcrypt.hash("bacon", null, null, function(err, hash) {
//   // Store hash in your password DB.
// });

/*
// Load hash from your password DB.
bcrypt.compare("bacon", hash, function(err, res) {
  // res == true
});
bcrypt.compare("veggies", hash, function(err, res) {
  // res = false
});
*/

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


//! bcrypt
// hash password
// $2a$10$xAY6i0l/3iZIajZ66BI9b.NjM50q2JZuXlaBEzRfejUvXocOqeGsi

//! compare pwd input and database, if it is much, return true
// first guess true
// second guess false
// profile
app.get('/profile/:id', (req, res) => {
  const { id } = req.params;
  database.users.forEach(user => {
    if (user.id === id) {
      res.json(user)
    } else {
      res.status(404).json('no such user')
    }
  })
})

// sign-in
app.post('/signin', (req, res) => {
  // res.send('signing')
  // res.json('signing')

  // Load hash from your password DB.
  bcrypt.compare("bacon", hash, function(err, res) {
    // res == true
  });
  bcrypt.compare("veggies", hash, function(err, res) {
    // res = false
  });

  if (req.body.email === database.users[0].email 
      && req.body.password === database.users[0].password 
    ) {
      res.json('success')
  } else {
    res.status(400).json('error logging in...')
  }
})


// copy
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

const app = express();
app.use(bodyParser.json())
app.use(cors());

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

app.get('/', (req, res) => {
  // res.send('this is working')
  res.send(database.users)
})

// sign-in
app.post('/signin', (req, res) => {
  /*
  // Load hash from your password DB, check if pwd correct.
  bcrypt.compare("apples", '$2a$10$xAY6i0l/3iZIajZ66BI9b.NjM50q2JZuXlaBEzRfejUvXocOqeGsi', function(err, res) {
    // res == true
    console.log('first guess', res)
  });
  bcrypt.compare("veggies", '$2a$10$xAY6i0l/3iZIajZ66BI9b.NjM50q2JZuXlaBEzRfejUvXocOqeGsi', function(err, res) {
    // res = false
    console.log('second guess', res)
  });
  */
  if (req.body.email === database.users[0].email &&
      req.body.password === database.users[0].password) {
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

//! compare pwd input(sent) and in database, if it is much, return true
// first guess true
// second guess false

// copy end



// get user from users table
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

// knexjs import and run
const knex = require('knex');

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

app.get('/', (req, res) => {
  res.send(database.users)
})

// sign-in
app.post('/signin', (req, res) => { 
  if (req.body.email === database.users[0].email &&
      req.body.password === database.users[0].password) {
    res.json('success')
  } else {
    res.status(400).json('error logging in...')
  }
})

// register
app.post('/register', (req, res) => {
  const { email, name, password } = req.body;

  /*
  database.users.push(
    {
      id: '125',
      name: name,
      email: email,
      entries: 0,
      joined: new Date()
    }
  )
  */
 db_postgres('users')
   .returning('*') 
   .insert({
     name: name, 
     email: email,
     joined: new Date()
//  }).then(console.log( ))
 }).then(user => {
  //  res.json(database.users[database.users.length-1])   
   res.json(user[0])
 })
//  .catch(err => res.status(400).json(err))  //! shows real error, which is not good
 .catch(err => res.status(400).json('unable to register...'))
})

// profile
app.get('/profile/:id', (req, res) => {
  const { id } = req.params;
  // let found = false;

  /*
  database.users.forEach(user => {
    if (user.id === id) {
      found = true;
      return res.json(user)
    } 
  })
  */
 db_postgres.select('*').from('users').where({
  id: id
 })
 .then(user => {
  console.log(user)
  if (user.length) {
    res.json(user[0]) 
  } else {
    res.status(400).json('Not found')
  }
 })
 .catch(err => res.status(400).json('error getting user...'))

  // if (!found) {
  //   res.status(400).json('not found...')
  // }
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

// get user from users table end
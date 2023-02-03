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

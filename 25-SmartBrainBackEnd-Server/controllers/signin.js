const handleSignIn = (req, res, db_postgres, bcrypt) => {  
  const { email, password } = req.body;
   // validations
  if (!email || !password) {
    return res.status(400).json('incorrect form submission');
  }

  db_postgres.select('email', 'hash').from('login')
    .where('email', '=', email)
    .then(data => {
      console.log(data)
      const isValid = bcrypt.compareSync(password, data[0].hash);

      if (isValid) {
        return db_postgres.select('*').from('users')
          .where('email', '=', email)
          .then(user => {
            console.log(user)
            res.json(user[0])
          })
          .catch(err => res.status(400).json('unable to get user...'))
      } else {
        res.status(400).json('wrong vredentials');
      }
    })
    .catch(err => res.status(400).json('wrong credentials...'))
}

module.exports = {
  handleSignIn:  handleSignIn
}
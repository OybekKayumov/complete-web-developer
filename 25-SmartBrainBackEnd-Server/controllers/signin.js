const handleSignIn = (req, res, db_postgres, bcrypt) => {   
  db_postgres('email', 'hash').from('login')
    .where('email', '=', req.body.email)
    .then(data => {
      console.log(data)
      const isValid = bcrypt.compareSync(req.body.password, data[0].hash);

      if (isValid) {
        return db_postgres.select('*').from('users')
          .where('email', '=', req.body.email)
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
const handleProfileGet = (req, res, db_postgres) => {
  const { id } = req.params;
  
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
}

module.exports = {
  handleProfileGet
}
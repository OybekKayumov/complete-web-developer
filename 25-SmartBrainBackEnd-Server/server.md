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
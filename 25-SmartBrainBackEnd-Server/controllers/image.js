const handleImage = (req, res, db_postgres) => {
  const { id } = req.body;  
    db_postgres('users').where('id', '=', id)
      .increment('entries', 1)
      .returning('entries')
      .then(entries => {
        console.log(entries);
        res.json(entries[0].entries);
      })
      .catch(err => res.status(400).json('unable to get entries...'))
}

module.exports = {
  handleImage
}
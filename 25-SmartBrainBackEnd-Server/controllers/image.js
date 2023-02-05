const Clarifai = require('clarifai');

const app = new Clarifai.App({
  apiKey: '53e1df302c079b3db8a0a36033ed2d15'
})

// app.models.predict(
//     Clarifai.FACE_DETECT_MODEL,
//     this.state.input)

const handleApiCall = (req,res) => {
  app.models.predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
  .then(data => {
    res.json(data);
  })
  .catch(err => res.status(400).json('unable to work with API'))
}

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
  handleImage,
  handleApiCall
}
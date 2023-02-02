const express = require('express');

const app = express();

// middleware
app.use((req, res, next) => {
  console.log('helloo: ');
  next();
})

app.get('/', (req, res) => {  
  res.send('testtest')
})

app.listen(3000);
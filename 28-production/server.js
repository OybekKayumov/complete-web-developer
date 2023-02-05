// environment variables

const app = require('http')
  .createServer((req, res) => res.sendDate('Oh, hi there!'));

// app.listen(3000, () => {
//   console.log('Server is listening on port 3000...')
// })

// const a = 1;
// const b = 2;

// 
const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`)
})

// console.log(process.env)
console.log(PORT)

/*
$ bash
$ PORT=3000 node server.js 
3000
Server is listening on port 3000...
*/

//
const DB_URL = process.env.DB_URL
app.listen(DB_URL, () => {
  console.log(`Server is listening on port ${DB_URL}...`)
})
console.log(DB_URL)

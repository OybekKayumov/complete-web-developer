// Promise example
/*
moviePlayer(100, 'Left')
  .then(() =>movePlayer(400, 'Left'))
  .then(() =>movePlayer(10, 'Right'))
  .then(() =>movePlayer(330, 'Left'))
*/

async function playerStart() {
  const firstMove = await movePlayer(100, 'left'); // pause
  await movePlayer(400, 'left');  // pause
  await movePlayer(10, 'right');  // pause
  await movePlayer(330, 'left');  // pause
}

//! 
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(resp => resp.json())
//   .then(console.log())

async function getUsers() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await resp.json()
  console.log(data)
}

getUsers();

//!
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums',
]

const getData = async () => {
  const [users, posts, albums] = await Promise.all(urls.map(url => fetch(url).then(resp => resp.json())
  ))
  console.log('users: ', users);
  console.log('posts: ', posts);
  console.log('albums: ', albums);
}

getData()
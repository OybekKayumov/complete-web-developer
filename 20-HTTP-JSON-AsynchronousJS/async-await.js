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
  try {
      const [users, posts, albums] = await Promise.all(urls.map(url => fetch(url).then(resp => resp.json())
      ))
      console.log('users: ', users);
      console.log('posts: ', posts);
      console.log('albums: ', albums);
  } catch (error) {
    console.log('oops', error );
  }
}

getData()

//todo
// Solve the below problems:

// #1) Convert the below promise into async await
fetch("https://jsonplaceholder.typicode.com/users/")
  .then((response) => response.json())
  .then(console.log);

async function fetchData() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users/") 
  const data = await resp.json()
  console.log(data);
}

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls1 = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData1 = async function () {
  const [users, posts, albums] = await Promise.all(
    urls.map((url) => fetch(url).then((resp) => resp.json())),
  );
  console.log("users", users);
  console.log("posta", posts);
  console.log("albums", albums);
};

const getData11 = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map(async function(url) {
        const resp = await fetch(url)
        return resp.json()
      }),
    );
    console.log("users", users);
    console.log("posta", posts);
    console.log("albums", albums);
  } catch (error) {
    console.log('ooops', error);
  }  
} 

// #3)Add a try catch block to the #2 solution in order to catch any errors. // Now, use the given array containing an invalid url, so you console.log  //your error with 'oooooops'.
const urls2 = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholdeTYPO.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];


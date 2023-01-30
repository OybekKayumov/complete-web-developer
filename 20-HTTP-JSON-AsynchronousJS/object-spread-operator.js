//todo: object spread operator
/*
const animals = {
  tiger: 23,
  lion: 5,
  monkey: 2
}

const { tiger, ...rest } = animals;
console.log('rest: ', rest);
// rest:  { lion: 5, monkey: 2 }
*/

// ES6
const arr = [1,2,3,4,5];
function sumArr(a,b,c,d,e) {
  return a + b + c + d + e;
}

console.log('sumArr: ', sumArr(...arr));
// sumArr:  15

//
const animals = {
  tiger: 23,
  lion: 5,
  monkey: 2,
  bird: 40
}

const { tiger, lion, ...rest } = animals;

function objectSpread(param1, param2, param3) {
  console.log(': ', param1);
  console.log(': ', param2);
  console.log(': ', param3);
}

console.log( objectSpread(tiger, lion, rest) )
// :  23
// :  5
// :  { monkey: 2, bird: 40 }

// TODO: finally
const urls2 = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]

Promise.all(urls2.map(
  url => fetch(url).then(people => people.json())
)).then(arr => {
  // throw Error;
  console.log('1: ', arr[0]);
  console.log('2: ', arr[1]);
  console.log('3: ', arr[2]);
  console.log('4: ', arr[3]);
}).catch(err => console.log('fix it!: ', err ))
// .finally(data => console.log('extra', data))
.finally(() => console.log('extra'))

//* output always: extra

//TODO:for await of

const urls1 = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData1 = async function () {
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

//
const loopUrls = url => {
  for (url of urls1) {
    console.log(': ', url);
  }
}

loopUrls()

// 
const getData11 = async function () {
  const arrOfPromises = urls1.map(url => fetch(url));

  for await ( let request of arrOfPromises) {  // !
    const data = await request.json();
    console.log('data: ', data);
  }
}

getData11()
// * output users, posts, albums

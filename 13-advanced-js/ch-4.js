// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//todo: Create an array using forEach that has all the usernames with a "!" to each of the usernames
const arrNew = [];
array.forEach(user => {
  let {username} = user;
  username += "!";
  arrNew.push(username);  
})
console.log('arrNew: ', arrNew);
// arrNew:  (4) ['john!', 'becky!', 'susy!', 'tyson!']

//todo: Create an array using map that has all the usernames with a "?" to each of the usernames

const newMap = array.map(user => {
  let {username} = user;
  return username + "?";
})

console.log('map: ', newMap);
// map:  (4) ['john?', 'becky?', 'susy?', 'tyson?']

//todo: Filter the array to only include users who are on team: red
const newFilter = array.filter(user => {  
  return user.team === 'red';
})

console.log('newFilter: ', newFilter);
// newFilter:  (2) [{…}, {…}]0: 
// {username: 'john', team: 'red', score: 5, items: Array(3)}1: 
// {username: 'susy', team: 'red', score: 55, items: Array(3)}

//todo: Find out the total score of all users using reduce
const total = array.reduce((acc, curr) => {
  return acc + curr.score
}, 0)
console.log('total: ', total);  // 71

// (1), what is the value of i?       // Index of array
// (2), Make this map function pure:  // 

// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
// 	console.log(num, i);
// 	alert(num);
// 	return num * 2;
// })

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => num * 2);
console.log('newArray: ', newArray);
newArray:  (6) [2, 4, 8, 10, 16, 18]

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const updatedArr = array.map(user => {
  user.items = user.items.map(item => {
    return item + '!'
  });
  return user;
})

console.log('updatedArr: ', updatedArr);

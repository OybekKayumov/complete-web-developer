// DOM manipulations
/*
// getElementById
const title = document.getElementById('main-heading');
console.log(': ', title);

// getElementByClassName
const listItems = document.getElementsByClassName('list-items');
console.log(': ', listItems);

// getElementsByTagName
const listItems1 = document.getElementsByTagName('li');
console.log(': ', listItems1);

// querySelector
const container = document.querySelector('div');
console.log(': ', container);

// querySelectorAll
const lists = document.querySelectorAll('li');
console.log('querySelectorAll: ', lists); 
*/

//todo: Styling elements
// const title = document.querySelector('#main-heading');
// title.style.color = 'red';
// console.log(title );

/*
const listItems = document.querySelectorAll('.list-items');
for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.fontSize = '2rem';  
}
console.log(listItems); 
*/

//todo: Creating elements
const ul = document.querySelector('ul');
const li = document.createElement('li');

// adding elements
ul.append(li);

// modifying the text
const firstListItem = document.querySelector('.list-items');

console.log(firstListItem.innerText);
// Neo The Matrix

console.log(firstListItem.textContent);
// Neo
// The Matrix

console.log(firstListItem.innerHTML);
{/* <span>Neo</span>
The Matrix */}
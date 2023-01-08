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
li.innerText = 'X-men'

const firstListItem = document.querySelector('.list-items');

console.log(firstListItem.innerText);
// Neo The Matrix

console.log(firstListItem.textContent);
// Neo
// The Matrix

console.log(firstListItem.innerHTML);
{/* <span>Neo</span>
The Matrix */}

//todo: modifying attributes & classes
li.setAttribute('id', 'main-heading');
li.removeAttribute('id');

const title = document.querySelector('#main-heading');
console.log(title.getAttribute('id')); 
// main-heading

//
li.classList.add('list-items');
li.classList.remove('list-items');

console.log(li.classList.contains('list-items'));  // false

//todo: remove elements
li.remove();

//TODO: Traverse the DOM

//todo: parent node traversal
// let ul1 = document.querySelector('ul')
// console.log(ul1);
// console.log(ul1.parentNode.parentNode);   // container--body
// console.log(ul1.parentElement.parentElement);

// const html = document.documentElement;
// console.log(html);
// console.log(html.parentNode);     // #document
// console.log(html.parentElement);  // null

//todo: child node traversal
// let ul1 = document.querySelector('ul')
// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.backgroundColor = 'blue';

// console.log(ul1.children);
// console.log(ul1.firstElementChild);
// console.log(ul1.lastElementChild);

//todo: sibling node traversal
// let ul1 = document.querySelector('ul')
// const div = document.querySelector('div')

// console.log(div.childNodes);

// console.log(ul1.previousSibling);
// console.log(ul1.nextSibling);
// console.log(ul1.previousElementSibling);
// console.log(ul1.nextElementSibling);

//TODO: Event listeners
const button2 = document.querySelector('.btn-2');

function alertBtn() {
  alert('I also love JS')
}

button2.addEventListener('click', alertBtn);

//todo: mouseover
const newBgColor = document.querySelector('.box-3')

newBgColor.addEventListener('mouseover', changeBg);

function changeBg() {
  newBgColor.style.backgroundColor = 'orange';
}

//todo: reveal event
const revealBtn = document.querySelector('.reveal-btn');

const hiddenContent = document.querySelector('.hidden-content');

function revealContent() {
  if (hiddenContent.classList.contains('reveal-btn')) {
    hiddenContent.classList.remove('reveal-btn');
  } else {
    hiddenContent.classList.add('reveal-btn')
  }
}

revealBtn.addEventListener('click', revealContent)

//TODO: Event Propagation
// 3 phases
//1 event capturing
//2 target
//3 event bubbling
/*
window.addEventListener('click', (e) => {  
  console.log('Window');
}, false)

document.addEventListener('click', (e) => {
  console.log('Document');
}, false)

document.querySelector('.div2').addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('DIV 2');
}, {once: true})

document.querySelector('.div1').addEventListener('click', (e) => {  
  console.log('DIV 1');
}, false)

// document.querySelector('.buttonProp').addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log(e.target.innerText = 'clicked!');
// }, false)

document.querySelector('.button1').addEventListener('click', function(e) {
  e.preventDefault();
  console.log(e.target.innerText = 'clicked!');
}, false)
*/
// TODO: Event delegation allows users to append a SINGLE event listener to a parent element that adds it to all of its present AND future descendants that match a selector

document.querySelector('#football').addEventListener('click', function (e) {
  console.log('football is clicked');

  const target = e.target;

  if (target.matches('li')) {
    target.style.backgroundColor = 'lightgrey'
  }
})


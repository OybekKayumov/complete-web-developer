//TODO: Document Object Model
// document - object
// document.write('Hello')
// each browser has its own JS Engine, which looks for js file and read it line by line
// Chrome - V8 + DOM

// parent object of document is "window"
// alert, prompt, document are window objects

// window.alert('check')
// alert('check')

// web-browser has a "window" object which has a property "document" that specify what to display. it reads html and css. JS is read line by line with JS Engine (V8) and modify html and css

// TODO: DOM Selectors
// document.getElementsByTagName("h1");
// document.getElementsByClassName("second");
// document.getElementById("first");
// document.getElementsByClassName('second')[0];

// document.querySelectorAll('h1, li');
// document.querySelector('li').getAttribute('random');  //34

// document.querySelector('li').setAttribute('random', '100');  
// document.querySelector('li');  // 100

// document.querySelector('h1').style.background = 'red';
// document.querySelector('h1').style.color = 'black';

// const h1 = document.querySelector('h1');
// h1.className = 'coolTitle';

// document.querySelector('li').classList.add('coolTitle');

// document.querySelector('li').classList.add('done');
// document.querySelector('li').classList.remove('done');
// document.querySelector('li').classList.toggle('done');

// h1.innerHTML = "<strong>!!!!!</strong>"

// console.log( document.querySelectorAll('li')[1]) // jello
// console.log( document.querySelectorAll('li')[1].parentElement ); // ul
// console.log( document.querySelectorAll('li')[1].parentElement.parentElement ) // body
// console.log( document.querySelectorAll('li')[1].parentElement.parentElement.parentElement ) // html
// console.log( document.querySelectorAll('li')[1].parentElement.parentElement.parentElement.parentElement ) // null

//TODO: Cache selectors in variables

// const h1Cache = document.querySelector('h1');


//TODO: DOM Events
const btn = document.getElementsByTagName('button')[0];  // returns array , [0] get 1st element
// btn.addEventListener('click', function (e) {
//   console.log('Clicked');
// })

// btn.addEventListener('mouseenter', function (e) {
//   console.log('Clicked');
// })
const btnEnt = document.getElementById('enter');
const input = document.getElementById('userinput');
const ul = document.querySelector('ul');

btnEnt.addEventListener('click', function (e) {
  console.log('click is working');
  console.log(input.value);
  if (input.value.length > 0) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = '';
  } else {
    alert('enter todo')
  }
})

// 1 create an element        -- createElement
// 2 add text to new element  -- createTextNode
// 3 append as a child element -- appendChild

// input value
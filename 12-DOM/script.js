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

const h1 = document.querySelector('h1');
h1.className = 'coolTitle';






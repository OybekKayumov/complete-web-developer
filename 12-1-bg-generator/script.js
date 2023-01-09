const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.getElementById('gradient');
// console.log(css, color1, color2, body);
// body.style.background = 'green';

function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`
}

/*
color1.addEventListener('input', function () {
  console.log(color1.value);
  setGradient();    // ! ()
})

color2.addEventListener('input', setGradient)   // ! ()

*/
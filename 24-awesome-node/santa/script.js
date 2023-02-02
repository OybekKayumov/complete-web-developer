const fs = require('fs')

// ( --> UP, ) --> DOWN 1 floor

function question1() {
  fs.readFile('./santa.txt', (err, data) => {
    console.time('santa-time'); //!

    const direction = data.toString();
    console.log('direction: ', direction);

    const directionArr = direction.split('');
    console.log('directionArr: ', directionArr);

    const answer = directionArr.reduce((acc, curr) => {
      if (curr === '(') {
        return acc += 1;
      } else if (curr === ')') {
        return acc -= 1;
      }
    }, 0)

    console.timeEnd('santa-time'); //!
    console.log('answer, floor: ', answer);
  })
}

// question1();

// 2 when does Santa first enter the basement
function question2() {
  fs.readFile('./santa.txt', (err, data) => {
    const direction = data.toString();
    const directionArr = direction.split('');
    let acc = 0;
    let counter = 0;
    const answer = directionArr.some((curr) => {
      if (curr === '(') {
        acc += 1;
      } else if (curr === ')') {
        acc -= 1;
      }
      counter ++;
      return acc < 0;
    })
    console.log('basement entered at: ', counter);
  })
}

question2();
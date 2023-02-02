const fs = require('fs')

// ( --> UP, ) --> DOWN 1 floor

function question1() {
  fs.readFile('./santa.txt', (err, data) => {
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
    console.log('answer, floor: ', answer);
  })
}

question1();
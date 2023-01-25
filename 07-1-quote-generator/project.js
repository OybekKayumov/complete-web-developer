// variables
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

/* 
Google some of your favorite quotes and use the below template:
{
  quote: `"QUOTE."`,
  person: ` PERSON` 
},
*/
const quotes = [{
    quote: `"Be yourself; everyone else is already taken."`,
    person: ` Oscar Wilde`
  },{
    quote: `"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."`,
    person: `  Maya Angelou` 

  },{
    quote: `"I haven't failed. I've just found 10,000 ways that won't work."`,
    person: ` Thomas Edison` 

  }, {
    quote: `"Either you run the day, or the day runs you."`,
    person: ` Jim Rohn` 

  }, {
    quote: `"Life shrinks or expands in proportion to one's courage."`,
    person: ` Anais Nin` 

  }, {
    quote: `"Great minds discuss ideas; average minds discuss events; small minds discuss people."`,
    person: ` Eleanor Roosevelt` 

  }, {
    quote: `"The greatest discovery of all time is that a person can change his future by merely changing his attitude."`,
    person: ` Oprah Winfrey` 

  }, {
    quote: `"In this world nothing can be said to be certain, except death and taxes."`,
    person: ` Benjamin Franklin` 

  }, {
    quote: `"Life is like a camera. Just focus on what's important, capture the good times, develop from the negatives, and if things don't work out, just take another shot."`,
    person: ` Unknown` 

  }, {
    quote: `"The man who removes a mountain begins by carrying away small stones."`,
    person: ` Chinese Proverbs` 

  }, {
    quote: `"Live as if you were to die tomorrow. Learn as if you were to live forever."`,
    person: ` Mahatma Gandhi` 
  }, 
];

// event listener
btn.addEventListener('click', function() {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
})

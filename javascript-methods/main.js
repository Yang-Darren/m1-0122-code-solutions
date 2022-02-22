var x = 1;
var y = 2;
var z = 3;

var maximumValue = Math.max(x, y, z);
console.log('The largest number is:', maximumValue);

var heroes = ['Spiderman', 'Ironman', 'Thor', 'Hulk'];
var randomNumber = Math.random();
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('Value of randomIndex', randomIndex);

var randomHero = heroes[randomIndex];
console.log('Value of randomHero', randomHero);

var library = [
  {
    title: 'Harry Potter',
    author: 'J.K Rowling'
  },
  {
    title: 'Lord of the Rings',
    author: 'J.R.R. Tolkien'
  },
  {
    title: 'The Da Vinci Code',
    author: 'Dan Brown'
  }
];

var lastBook = library.pop();
console.log('Value of lastBook:', lastBook);
var firstBook = library.shift();
console.log('Value of firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('Value of library:', library);

var fullName = 'Darren Yang';
var firstAndLastName = fullName.split(' ');
console.log('Value of firstAndLastName: ', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('Value of sayMyName: ', sayMyName);

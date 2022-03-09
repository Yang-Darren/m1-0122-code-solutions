console.log('hello, world');

var header = document.querySelector('h1');
console.log('query h1:', header);
console.dir(header);

var explanation = document.querySelector('#explanation');
console.log('query explanation id:', explanation);
console.dir(explanation);

var hint = document.querySelector('.hint');
console.log('query hint class:', hint);
console.dir(hint);

var paragraph = document.querySelector('p');
console.log('p nodelist:', paragraph);

var example = document.querySelector('.example-link');
console.log('example nodelist:', example);

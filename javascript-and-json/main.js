var books = [
  {
    isbn: '978-0545791434',
    title: 'Harry Potter and the Order of the Phoenix',
    author: 'J.K. Rowling'
  },
  {
    isbn: '978-0007525546',
    title: 'Lord of The Rings',
    author: 'J.R.R. Tolkien'
  },
  {
    isbn: '978-0060598242',
    title: 'The Chronicles of Narnia',
    author: 'C.S. Lewis'
  }
];

console.log('books', books);
console.log('typeof books:', typeof books);

console.log('stringified books: ', JSON.stringify(books));
console.log('typeof stringified books: ', typeof JSON.stringify(books));

var student = '{"id":"210414", "name":"Darren"}';

console.log('student string:', student);

var studentParsed = JSON.parse(student);

console.log('student parsed:', studentParsed);
console.log('typeof student parsed:', typeof studentParsed);

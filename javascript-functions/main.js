function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
var convertMinutesToSecondsResults = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResults:', convertMinutesToSecondsResults);

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

var greetResults = greet('Darren');
console.log('greetResults:', greetResults);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var getAreaResults = getArea(17, 42);
console.log('getAreaResults:', getAreaResults);

function getFirstName(person) {
  return person.firstName;
}

var getFirstNameResults = getFirstName({ firstName: 'Darren', lastName: 'Yang' });
console.log('getFirstNameResults:', getFirstNameResults);

function getLastElement(array) {
  return array[array.length - 1];
}

var getLastElementResults = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElementResults:', getLastElementResults);

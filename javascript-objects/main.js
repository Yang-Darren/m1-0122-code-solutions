var student = {
  firstName: 'Darren',
  lastName: 'Yang',
  age: 30
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('The value of fullName is:' + fullName);

student.livesInIrvine = false;
student.previousOccupation = 'personnel analyst';

console.log('The value of livesInIrvine: ' + student.livesInIrvine);
console.log('The value of previousOccupation:' + student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Honda',
  model: 'Civic',
  year: 2018
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;
console.log('value of color: ', vehicle['color']);
console.log('value of isConvertible: ', vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);

var pet = {
  name: 'Token',
  type: 'dog'
};

delete pet.name;
delete pet.type;

console.log('the value of pet: ', pet);

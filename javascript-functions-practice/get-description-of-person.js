/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  var getDescriptionOfPersonResults = person.name + ' is a ' + person.occupation + ' from ' + person.birthPlace + '.';
  return getDescriptionOfPersonResults;
}

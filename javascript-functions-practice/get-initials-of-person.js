/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var getFirstInitialOfPersonResults = person.firstName.charAt(0) + person.lastName.charAt(0);
  return getFirstInitialOfPersonResults;
}

/* exported capitalizeWords */
function capitalizeWords(string) {
  var lowerCase = string.toLowerCase();
  var newArray = lowerCase.split(' ');
  var stringArray = [];
  for (var i = 0; i < newArray.length; i++) {
    stringArray.push(newArray[i][0].toUpperCase() + newArray[i].slice(1, lowerCase.length));
  }
  return stringArray.join(' ');
}

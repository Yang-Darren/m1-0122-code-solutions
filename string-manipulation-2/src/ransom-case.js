/* exported ransomCase */
function ransomCase(string) {
  var letters = string.toLowerCase();
  var newString = [];
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newString.push(letters[i]);
    } else {
      newString.push(letters[i].toUpperCase());
    }
  }
  return newString.join('');
}

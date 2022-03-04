/* exported capitalize */
// define a function capitalize with one parameter word
// return word charAt 0 toUpperCase

function capitalize(word) {
  var lowerCase = word.toLowerCase();
  var letters = lowerCase.split('');
  var upperCase = letters.shift().toUpperCase();
  return upperCase + letters.join('');
}

// define a function capitalize with one parameter word
// call the toLowerCase() method of the word object, and assign it to a variable lowerCase
// call the split('') method of the lowerCase object and assign it to the variable letters
//

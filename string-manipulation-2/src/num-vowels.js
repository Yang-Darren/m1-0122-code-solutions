/* exported numVowels */
function numVowels(string) {
  var vowels = 0;
  var lowerCase = string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if (lowerCase[i] === 'a' || lowerCase[i] === 'e' || lowerCase[i] === 'i' || lowerCase[i] === 'o' || lowerCase[i] === 'u') {
      vowels++;
    }
  }
  return vowels;
}

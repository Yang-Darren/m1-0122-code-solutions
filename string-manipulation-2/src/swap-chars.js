/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var newWord = [];
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newWord.push(string[secondIndex]);
    } else if (i === secondIndex) {
      newWord.push(string[firstIndex]);
    } else {
      newWord.push(string[i]);
    }
  }
  return newWord.join('');
}

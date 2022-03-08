/* exported capitalizeWord */
function capitalizeWord(word) {
  var newWord = word.toLowerCase();
  if (newWord === 'javascript') {
    return 'JavaScript';
  }
  return newWord[0].toUpperCase() + newWord.slice(1, newWord.length);
}

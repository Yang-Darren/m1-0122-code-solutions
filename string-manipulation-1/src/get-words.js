/* exported getWords */
function getWords(string) {
  var array = string.split(' ');
  if (array[0] === '') {
    return [];
  } else {
    return array;
  }
}

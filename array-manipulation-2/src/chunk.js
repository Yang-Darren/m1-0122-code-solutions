/* exported chunk */
function chunk(array, size) {
  var firstArray = [];
  var j = 0;
  for (let i = 0; i < array.length; i += size) {
    var secondArray = [];
    for (j; j < i + size; j++) {
      if (j > array.length - 1) {
        break;
      }
      secondArray.push(array[j]);
    }
    firstArray.push(secondArray);
  }
  return firstArray;
}

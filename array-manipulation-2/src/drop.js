/* exported drop */
// define a function drop with two parameters, array and count
// use the slice method of the array object with 2 parameters, count, and array length and assign the value to newArray
// return newArray

function drop(array, count) {
  var newArray = array.slice(count, array.length);
  return newArray;
}

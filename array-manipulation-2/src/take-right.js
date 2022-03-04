/* exported takeRight */

// define a function takeRight with two parameters array and count
// use an if statement if count is greater than array.length, return array
// use an else statement and use the slice method of the array object with 2 parameters, array.length - count and array.length
// assign the value to a new variable newarray
function takeRight(array, count) {
  if (count > array.length) {
    return array;
  } else {
    var newArray = array.slice((array.length - count), array.length);
    return newArray;
  }
}

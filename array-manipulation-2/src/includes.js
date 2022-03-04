/* exported includes */
// define a function includes with two parameters array and value
// use a for loop with: an initialization expression 0 assigned to the variable i
// checks that i is less than the length of the array
// and auto increment the variable i
// use an if statement where array at index i is strictly equal to value return true
// return false outside the loop if the loop does not return true

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  } return false;
}

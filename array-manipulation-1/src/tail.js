/* exported tail */
// define a function tail with one parameter array
// define a variable newArray an assign it an empty array
// use a for loop to push each item in the parameter object after the first one
// when the loop is complete, return the newArray

function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// define a function tail with one parameter array
// define a variable newArray an assign it an empty array
// use a for loop to loops through each item in the array after the first
// when the loop is complete, return the newArray

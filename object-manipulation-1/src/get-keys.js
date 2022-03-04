/* exported getKeys */
// define a function getKeys with one parameter, object
// an empty array is assigned to the variable keys
// use a for in loop to get each property key of the input object and push it into the keys array
// return keys array

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}

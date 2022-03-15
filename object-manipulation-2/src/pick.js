/* exported pick */

// define a function pick with 2 parameters source and keys
// define a new variable newObject with an empty array
// create a for loop with an initialization expression var i = 0
// i is less than the keys array length and i is incrementing
// use an if statement where object source for key at i is not undefined then newObject keys at i is equal to source keys at i
// return newObject

function pick(source, keys) {
  var newObject = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      newObject[keys[i]] = source[keys[i]];
    }
  }
  return newObject;
}

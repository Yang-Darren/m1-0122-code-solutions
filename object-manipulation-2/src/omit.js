/* exported omit */
function omit(source, keys) {
  var newObject = {};
  for (var i = 0; i < keys.length; i++) {
    if (newObject[keys[i]] !== source[keys[i]]) {
      newObject.push(source[keys[i]]);
    }
  }
  return newObject;
}

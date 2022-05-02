/* exported unique */
function unique(array) {
  var newObj = [];
  for (var i = 0; i < array.length; i++) {
    if (!newObj.includes(array[i])) {
      newObj.push(array[i]);
    }
  }
  return newObj;
}

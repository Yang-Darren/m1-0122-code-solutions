/* exported union */
function union(first, second) {
  var newObj = [];
  for (var i = 0; i < first.length; i++) {
    if (first.indexOf(first[i]) !== -1) {
      newObj.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (first.indexOf(second[j]) === -1) {
      newObj.push(second[j]);
    }
  }
  return newObj;
}

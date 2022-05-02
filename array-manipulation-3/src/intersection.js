/* exported intersection */
function intersection(first, second) {
  var newObj = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      newObj.push(first[i]);
    }
  }
  return newObj;
}

/* exported zip */
function zip(first, second) {
  var newObj = [];
  var shorterLength;
  if (first.length < second.length) {
    shorterLength = first.length;
  } else {
    shorterLength = second.length;
  }
  for (let i = 0; i < shorterLength; i++) {
    var subArr = [];
    subArr.push(first[i]);
    subArr.push(second[i]);
    newObj.push(subArr);
  }
  return newObj;
}

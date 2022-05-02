/* exported difference */
function difference(first, second) {
  const newObj = [];
  for (let i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      newObj.push(first[i]);
    }
  }
  for (let j = 0; j < second.length; j++) {
    if (!first.includes(second[j])) {
      newObj.push(second[j]);
    }
  }
  return newObj;
}

/* exported filterOutNulls */
function filterOutNulls(values) {
  var numbers = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      numbers.push(values[i]);
    }
  }
  return numbers;
}

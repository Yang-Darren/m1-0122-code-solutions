/* exported lastChars */
function lastChars(length, string) {
  if (length > string.length) {
    return string;
  } else if (string.length > length) { var newString = string.slice(string.length - length, string.length); }
  return newString;
}

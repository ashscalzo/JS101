// Write a function that takes one argument, a positive integer, and returns a
// string of alternating '1's and '0's, always starting with a '1'. The
// length of the string should match the given integer.

function stringy(num) {
  let finalStr = '';
  while (finalStr.length < num) {
    finalStr += '1';
    if (finalStr.length < num) {
      finalStr += '0';
    }
  }
  return finalStr;
}

console.log(stringy(6));
console.log(stringy(9));
console.log(stringy(4));
console.log(stringy(7));
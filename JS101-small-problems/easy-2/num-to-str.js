// In the previous two exercises, you developed functions that convert simple
// numeric strings to signed integers. In this exercise and the next,
// you're going to reverse those functions.

// Write a function that converts a non-negative integer value
// (e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.

// You may not use any of the standard conversion functions available in
// JavaScript, such as String(), Number.prototype.toString, or an
// expression such as '' + number. Your function should do this the
// old-fashioned way and construct the string by analyzing and
// manipulating the number.


function numToString (num) {
  let numArray = [];
  if (num === 0) return '0';
  while (num > 0) {
    let individualDigit = num % 10;
    numArray.unshift(individualDigit);
    num = (num - (num % 10)) / 10;
  }
  return numArray.join('');
}


console.log(numToString(123));
/*  joinOr function to be added to tic-tac-toe.js
Problem
write a function joinOr that takes an array and returns a string of the elements
separated by a punctuation (if >2 elements) using .join format
with a conjunction between the second to last and last value

Examples:
joinOr([1, 2, 3]);               // => "1, 2, or 3"
joinOr([1, 2, 3], '; ');         // => "1; 2; or 3"
joinOr([1, 2, 3], ', ', 'and');  // => "1, 2, and 3"
joinOr([]);                      // => ""
joinOr([5]);                     // => "5"
joinOr([1, 2]);                  // => "1 or 2"

Data structure
  functions
  Array.prototype.join
  strings
  variables
  String.prototype.concat or string concatenation or interpolation
    lots of choices here!

Algorithm
  function joinOr with three parameters
    the array we're converting
    the desired punctuation to separate each element as it's listed in the str
    a conjunction to join the last element of the array
  separate the last element from the others
    assign to a separate variable
  join the remaining variables with the specified punctuation
  join the string with all of the elements to the string with the last element
    add the conjunction before the last element (use interpolation maybe?)
  return the final string
*/

function joinOr(arr, separator = ', ', conjunct = 'or') {
  if (arr.length === 0) {
    return '';
  } else if (arr.length === 1) {
    return `${arr[0]}`;
  } else if (arr.length === 2) {
    return arr.join(` ${conjunct} `);
  } else {
    let finalElement = arr.pop();
    return `${arr.join(separator)}` + separator + conjunct + ` ${finalElement}`;
  }
}

console.log(joinOr([1, 2, 3]));               // => "1, 2, or 3"
console.log(joinOr([1, 2, 3], '; '));         // => "1; 2; or 3"
console.log(joinOr([1, 2, 3], ', ', 'and'));  // => "1, 2, and 3"
console.log(joinOr([]));                      // => ""
console.log(joinOr([5]));                     // => "5"
console.log(joinOr([1, 2]));                  // => "1 or 2"
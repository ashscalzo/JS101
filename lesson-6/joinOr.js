/*  joinOr function to be added to tic-tac-toe.js
PEDAC:
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
    if no punctuation is specified, default is a comma (see test case #1)
  join the last element to the string (interpolation or concatenation)
    second-to-last element should have punctuation after it, before last element
    if no conjunction specified, default is 'or' (see test case #1)
  if the array is empty => output should be empty string
  if the array has 1 element => output should be string of that element
  if array has 2 elements => output should be string of elements separated by
    conjunction
    no punctuation
  if array has 3 or more elements => output should be a string:
    list the elements, separated by punctuation
    conjunction should be in front of the last element, after punctuation
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
// Write a function that takes an array of integers as input,
// multiplies all of the integers together, divides the result by
// the number of entries in the array, and returns the result as
// a string with the value rounded to three decimal places.

/*
take array as input
multiply all integers
divide by length of array
round to 3 decimal places
*/


function multiplicativeAverage(arr) {
  let product = arr.reduce((acc, element) => acc * element, 1);

  return (product / arr.length).toFixed(3);
}


console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"
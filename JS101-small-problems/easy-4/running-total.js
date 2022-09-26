// Write a function that takes an array of numbers and returns
// an array with the same number of elements, but with each
// element's value being the running total from the original array


/* PEDAC
each element will be equal to that element plus the element
before it added together

the first element of the returned array should always be
equal to the first element of the given array
  e.g. second element will be the value of the first element
  and the second element of the given array added together,
  then the third will be equal to the value of the existing
  third element plus the new value for the second element, and so on

function takes one argument (array)
empty array returns empty array
array with 1 element returns itself
array with more than 1 element returns mutated array with running total


should iterate over array elements (forEach?)
each iteration will increment the value of the element before it in the array

return array at end
*/

function runningTotal(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    return arr.map(element => {
      let total = 0;
      total += element;
      return total;
    });
  }
}

// Examples:
console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []

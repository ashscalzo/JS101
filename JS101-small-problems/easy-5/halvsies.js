// Write a function that takes an array as an argument and
// returns an array that contains two elements, each of which
// is an array. Put the first half of the original array elements
// in the first element of the return value, and put the second
// half in the second element. If the original array contains
// an odd number of elements, place the middle element in the first
// half array.

function halvsies(arr) {
  let firstHalf = [];
  let secondHalf = [];

  if (arr.length === 0) return [firstHalf, secondHalf];

  for (let idx = 0; idx <= Math.floor((arr.length - 1) / 2); idx += 1) {
    firstHalf.push(arr[idx]);
  }

  for (let idx = Math.ceil(arr.length / 2); idx < arr.length; idx += 1) {
    secondHalf.push(arr[idx]);
  }

  return [firstHalf, secondHalf];
}


console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]

/* another solution below using slice method

function halvsies2(array) {
  let half = Math.ceil(array.length / 2);
  let firstHalf = array.slice(0, half);
  let secondHalf = array.slice(half);
  return [firstHalf, secondHalf];
}

console.log(halvsies2([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies2([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies2([5]));                // [[5], []]
console.log(halvsies2([]));                 // [[], []]

REMEMBER that the second argument for slice is the first element to EXCLUDE

*/
// Write a function that returns an Array that contains every other element of an 
// Array that is passed in as an argument. The values in the returned list should be 
// those values that are in the 1st, 3rd, 5th, and so on elements of the argument Array.

function oddities(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr[i]);
  }
  return result;
}

// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []


// Write a companion function that returns the 2nd, 4th, 6th, and so on elements of an array.
// Try to solve this exercise in a different way.

function evenList(arr) {
  let result = [];
  arr.forEach((element, idx) => {
    if (idx % 2 === 1) {
      result.push(element);
    }
  })
  return result;
}


console.log(evenList([2, 3, 4, 5, 6])); // logs [3, 5]
console.log(evenList([1, 2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(evenList(["abc", "def"])); // logs ['def']
console.log(evenList([123])); // logs []
console.log(evenList([]));
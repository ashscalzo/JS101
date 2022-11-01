// Write a function that takes two array arguments, each containing
// a list of numbers, and returns a new array that contains the product
// of each pair of numbers from the arguments that have the same index.
// You may assume that the arguments contain the same number of elements.

function multiplyList (arr1, arr2) {
  let resultArr = [];

  arr1.forEach((element, index) => {
    resultArr.push(element * arr2[index]);
  });

  return resultArr;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77])

// another solution using a for loop instead of the forEach method:

function multLists (arr1, arr2) {
  let resultArr = [];

  for (let i = 0; i < arr1.length; i += 1) {
    resultArr.push(arr1[i] * arr2[i]);
  }

  return resultArr;
}

console.log(multLists([3, 5, 7], [9, 10, 11]));
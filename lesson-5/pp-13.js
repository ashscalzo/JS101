// Given the following data structure, sort the array so that
// the sub-arrays are ordered based on the sum of the odd
// numbers that they contain.

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((a, b) => {
  let oddATotal = 0;
  let oddBTotal = 0;
  for (let index = 0; index < a.length; index++) {
    if (a[index] % 2 === 1) {
      oddATotal += a[index];
    }
  }
  for (let index = 0; index < b.length; index++) {
    if (b[index] % 2 === 1) {
      oddBTotal += b[index];
    }
  }
  return oddATotal - oddBTotal;
});

console.log(arr);

// Launch's solution; a bit more succinct
arr.sort((a, b) => {
  let oddSumA = a.filter(num => num % 2 === 1)
    .reduce((sum, next) => sum + next);
  let oddSumB = b.filter(num => num % 2 === 1)
    .reduce((sum, next) => sum + next);
  return oddSumA - oddSumB;
});
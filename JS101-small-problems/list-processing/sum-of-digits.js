// Write a function that takes one argument, a positive integer,
// and returns the sum of its digits. Do this without using for,
// while, or do...while loops - instead, use a series of method
// calls to perform the sum.

function sum(num) {
  let result = 0;
  let digitArr = String(num).split('');
  digitArr.forEach(digit => {
    result += Number(digit);
  });

  return result;
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
// Write a function that computes the sum of all numbers between 1 and some other 
// number, inclusive, that are multiples of 3 or 5. For instance, if the supplied 
// number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

// declare function multisum
// add numbers whose remainder is zero if divided by 3 or 5 
// skip numbers with remainder after dividing by 3 or 5

function multisum(num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }
  return result;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168


// can also extract to function to see if a number is multiple of another number:
// Launch's answer:
function isMultiple(number, divisor) {
  return number % divisor === 0;
}

function launchMultisum(num) {
  let sum = 0;
  for (let n = 1; n <= num; n += 1) {
    if (isMultiple(num, 3) || isMultiple(num, 5)) {
      sum += num;
    }
  }
  return sum;
}
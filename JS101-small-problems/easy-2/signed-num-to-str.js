// In the previous exercise, you developed a function that
// converts non-negative numbers to strings. In this exercise,
// you're going to extend that function by adding the ability to
// represent negative numbers as well.

// Write a function that takes an integer and converts it to a
// string representation.

// You may not use any of the standard conversion functions available
// in JavaScript, such as String() and Number.prototype.toString().
// You may, however, use integerToString() from the previous exercise.

// You might also want to check the Math.sign() function.

// with functionalities extracted into different functions:
function positiveNumToStr (num) {
  let numArray = [];
  while (num > 0) {
    let individualDigit = num % 10;
    numArray.unshift(individualDigit);
    num = (num - (num % 10)) / 10;
  }

  return numArray;
}

function negativeNumToStr (num) {
  let numArray = [];
  let posNum = num * Math.sign(num);
  while (posNum > 0) {
    let individualDigit = posNum % 10;
    numArray.unshift(individualDigit);
    posNum = (posNum - (posNum % 10)) / 10;
  }

  return numArray;
}

function signedIntegerToString (num) {
  let numArr = [];

  if (num === 0) return '0';
  else if (num > 0) {
    numArr = positiveNumToStr(num);
    numArr.unshift('+');
  } else {
    numArr = negativeNumToStr(num);
    numArr.unshift('-');
  }

  return numArr.join('');
}

console.log(signedIntegerToString(4321));
console.log(signedIntegerToString(-123));
console.log(signedIntegerToString(0));


// all condensed into one function below:

function signedIntToString (num) {
  let numArr = [];
  let posNum = num * Math.sign(num);

  if (num === 0) return '0';

  while (posNum > 0) {
    let individualDigit = posNum % 10;
    numArr.unshift(individualDigit);
    posNum = (posNum - (posNum % 10)) / 10;
  }

  if (num > 0) {
    numArr.unshift('+');
  } else {
    numArr.unshift('-');
  }

  return numArr.join('');
}

console.log(signedIntToString(4321));
console.log(signedIntToString(-123));
console.log(signedIntToString(0));
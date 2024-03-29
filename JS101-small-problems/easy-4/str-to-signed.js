// In the previous exercise, you developed a function that converts simple numeric strings to
// integers. In this exercise, you're going to extend that function to work with signed numbers.

// Write a function that takes a string of digits and returns the appropriate number as an
// integer. The string may have a leading + or - sign; if the first character is a +, your
// function should return a positive number; if it is a -, your function should return a
// negative number. If there is no sign, return a positive number.

// You may assume the string will always contain a valid number.

// You may not use any of the standard conversion methods available in JavaScript, such as
// parseInt() and Number(). You may, however, use the stringToInteger() function from the
// previous lesson.


function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  return value;
}


function stringToSignedInteger(str) {
  if (str[0] === '-') {
    return -stringToInteger(str.slice(1, str.length));
  } else if (str[0] === '+') {
    return stringToInteger(str.slice(1, str.length));
  } else {
    return stringToInteger(str);
  }
}


console.log(stringToSignedInteger('-571') === -571);
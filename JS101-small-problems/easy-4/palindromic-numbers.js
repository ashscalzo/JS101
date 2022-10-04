// Write a function that returns true if its integer
// argument is palindromic, or false otherwise. A palindromic
// number reads the same forwards and backwards.

function isPalindromicNumber (number) {
  let convertedNumber = String(number);
  let reverseConvertedNumber = convertedNumber.split('').reverse().join('');
  return convertedNumber === reverseConvertedNumber;
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true


// alternatively, because we already have the isPalindrome() function
// from a previous exercise, we can copy it to this one and call it:

// DON'T FORGET YOUR CONVERSION OF NUM TO STRING THOUGH

function isPalindrome (string) {
  let reversedString = string.split('').reverse().join('');
  return reversedString === string;
}

function isNumberPalindrome (number) {
  return isPalindrome(String(number));
}

console.log(isNumberPalindrome(34543));        // true
console.log(isNumberPalindrome(123210));       // false
console.log(isNumberPalindrome(22));           // true
console.log(isNumberPalindrome(5));            // true
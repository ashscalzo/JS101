// Write another function that returns true if the string
// passed as an argument is a palindrome, or false otherwise.
// This time, however, your function should be case-insensitive,
// and should ignore all non-alphanumeric characters. If you wish,
// you may simplify things by calling the isPalindrome function you
// wrote in the previous exercise.

function organizeCharacters (string) {
  let newWord = [];
  let letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let digits = '0123456789'.split('');
  string.split('').forEach(character => {
    if (letters.includes(character.toLowerCase()) ||
        digits.includes(character)) {
      newWord.push(character);
    }
  });
  return newWord.join('');
}

function isRealPalindrome(string) {
  let alphanumericString = organizeCharacters(string);
  let reverseString = organizeCharacters(string).split('').reverse().join('');
  return alphanumericString.toLowerCase() === reverseString.toLowerCase();
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false
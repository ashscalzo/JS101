// Write a function that takes a string and returns an object
// containing the following three properties:

// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither
// You may assume that the string will always contain at least one character.

function letterPercentages(string) {
  let result = {};
  let sortedChars = sortChars(string);
  let totalLength = string.length;

  result.lowercase = (sortedChars[0].length / totalLength * 100).toFixed(2);
  result.uppercase = (sortedChars[1].length / totalLength * 100).toFixed(2);
  result.neither = (sortedChars[2].length / totalLength * 100).toFixed(2);

  return result;
}

function sortChars (string) {
  let lowercase = [];
  let uppercase = [];
  let neither = [];
  let lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  for (let char of string) {
    if (lowerAlphabet.includes(char)) {
      lowercase.push(char);
    } else if (upperAlphabet.includes(char)) {
      uppercase.push(char);
    } else {
      neither.push(char);
    }
  }

  return [lowercase, uppercase, neither];
}


console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
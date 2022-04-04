// Write a function that returns the next to last word in the String passed to it as an argument.
// Words are any sequence of non-blank character.
// You may assume that the input String will always contain at least two words.

function penultimate(str) {
  let strArray = str.split(' ');
  return strArray[strArray.length - 2];
}

console.log(penultimate('last word'));
console.log(penultimate('Launch School is great!'));

// Further exploration
// Suppose we need a function that retrieves the middle word of a phrase/sentence.
// What edge cases need to be considered? How would you handle those edge cases 
// without ignoring them? Write a function that returns the middle word of a phrase 
// or sentence. It should handle all of the edge cases you thought of.

// edge cases
  //empty str
  //one word str
  //even number of words in str

function middleWord(str) {
  if (str.trim() === '') {              // accounts for empty string input
    return 'Invalid input: empty string detected.';
  }
  let strArray = str.split(' ');
  if (strArray.length === 1 || strArray.length % 2 === 0) { // if str is only one word or has an even number of words
    return null;
  } else {
    return strArray[Math.floor(strArray.length / 2)];
  }
}

console.log(middleWord('one two three four five!'));
console.log(middleWord('boop'));
console.log(middleWord('eat my shorts'));
console.log(middleWord('winston is the best baby ever.'));

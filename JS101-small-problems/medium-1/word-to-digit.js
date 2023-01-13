// Write a function that takes a sentence string as an argument
// and returns that string with every occurrence of a "number word"
// — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
// 'eight', 'nine' — converted to its corresponding digit character.

const numbers = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
};


function wordToDigit (string) {
  let sentenceArr = string.split('.');
  let wordArr = [];
  let newArr = [];

  for (let idx = 0; idx < sentenceArr.length; idx += 1) {
    wordArr.push(sentenceArr[idx].split(' '));
  }

  let numberWords = Object.keys(numbers);
  wordArr.forEach(sentence => {
    let newSentence = [];
    sentence.forEach(word => {
      if (numberWords.includes(word)) {
        word = numbers[word];
      }
      newSentence.push(word);
    });
    newArr.push(newSentence.join(' '));
  });
  return newArr.join('. ');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));  // "Please call me at 5 5 5 1 2 3 4. Thanks.")
console.log(wordToDigit('I less than three you.'));   // 'I less than 3 you.'
console.log(wordToDigit('This sentence ends with a one. This one ends with a five six seven eight.'));  // 'This sentence ends with a 1. This 1 ends with a 5 6 7 8.
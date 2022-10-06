// Modify the wordSizes function from the previous exercise to exclude non-
// letters when determining word size. For instance, the word size of
// "it's" is 3, not 4.

function includeLettersOnly (string) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let letters = string.split('');
  let newString = '';
  letters.forEach(character => {
    if (alphabet.includes(character.toLowerCase())) {
      newString += character;
    }
  });
  return newString;
}

function wordSizes (string) {
  let strLengths = {};
  if (string.trim().length === 0) return strLengths;
  let wordArray = string.split(' ');

  wordArray.forEach(word => {
    let wordWithOnlyLetters = includeLettersOnly(word);
    let wordLength = wordWithOnlyLetters.length;
    if (wordLength in strLengths) {
      strLengths[wordLength] += 1;
    } else {
      strLengths[wordLength] = 1;
    }
  });
  return strLengths;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}
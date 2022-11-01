// Given a string that consists of some words and an assortment of
// non-alphabetic characters, write a function that returns that string
// with all of the non-alphabetic characters replaced by spaces.
// If one or more non-alphabetic characters occur in a row, you should
// only have one space in the result (i.e., the result string should
// never have consecutive spaces).

function cleanUp (str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let wordArr = str.split(' ');
  let resultArr = [];
  wordArr.forEach(word => {
    let letterArr = word.split('');
    let convertedChars = [];
    letterArr.forEach(letter => {
      if (alphabet.includes(letter.toLowerCase())) {
        convertedChars.push(letter);
      } else {
        convertedChars.push(' ');
      }
    });

    word = convertedChars.join('').trim();
    if (word.length > 0) resultArr.push(word);

  });

  return resultArr.join(' ');
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
// 2. Starting with the following string, return a new string that swaps the case of all of the letters.

let munstersDescription = "The Munsters are creepy and spooky.";
let lowercaseAlpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
let uppercaseAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

console.log(munstersDescription.split('').map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join(''));
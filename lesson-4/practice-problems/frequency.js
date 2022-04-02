// Create an object that expresses the frequency with which each letter occurs in this string:

let statement = 'The Flintstones Rock';

let letters = statement.split('').filter(char => char !== ' ');
let result = {};

letters.forEach(letter => {
  result[letter] = result[letter] || 0;
  result[letter] += 1;
});

console.log(result);
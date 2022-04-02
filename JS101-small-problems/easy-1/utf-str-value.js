// Write a function that determines and returns the UTF-16 string value of a string 
// passed in as an argument. The UTF-16 string value is the sum of the UTF-16 values 
// of every character in the string. (You may use String.prototype.charCodeAt() to 
// determine the UTF-16 value of a character.)

function utf16Value(str) {
  let total = 0;
  for (let i = 0; i < str.length; i += 1) {
    total += str.charCodeAt(i);
  }
  return total;
}

console.log(utf16Value('Four score'));
console.log(utf16Value('Launch School'));
console.log(utf16Value('a'));
console.log(utf16Value(''));

const OMEGA = '\u03A9';
console.log(utf16Value(OMEGA));
console.log(utf16Value(OMEGA + OMEGA + OMEGA));
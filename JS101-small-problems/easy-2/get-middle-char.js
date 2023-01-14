// Write a function that takes a non-empty string argument and returns the
// middle character(s) of the string. If the string has an odd length, you
// should return exactly one character. If the string has an even length, you
// should return exactly two characters.

function centerOf (str) {
  if (str.length === 1) {
    return str;
  } else if (str.length % 2 === 0) {
    return str.slice((str.length - 1) / 2, ((str.length - 1) / 2) + 2);
  } else {
    return str[Math.floor(str.length / 2)];
  }
}


console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
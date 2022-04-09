// Write a function that takes a string argument and
// returns a new string that contains the value of the
// original string with all consecutive duplicate characters
// collapsed into a single character.

function crunch(str) {
  let characters = str.split('');
  let solution = [];
  for (let idx = 0; idx < characters.length; idx++) {
    if (characters[idx] !== characters[idx - 1]) {
      solution.push(characters[idx]);
    }
  }
  return solution.join('');
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
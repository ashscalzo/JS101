// 1. Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the days before computers had video screens.
// For this practice problem, write a program that outputs The Flintstones Rock! 10 times, with each line indented 1 space to the right of the line above it. 
let space = '';
let saying = 'The Flintsones Rock!';
for (let i = 0; i < 10; i += 1) {
  console.log(space + saying);
  space += ' ';
}

/* another way:
for (let padding = 1; padding < 10; padding += 1) {
  console.log(' '.repeat(padding) + "The Flintstones Rock!");
}
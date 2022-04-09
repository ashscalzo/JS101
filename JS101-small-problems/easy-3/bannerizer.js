// Write a function that will take a short line of text,
// and write it to the console log within a box.

function logInBox(str) {
  let characters = str.split('');
  let boxTopBottom = '+-';
  let boxMid = '| ';
  for (let char = 0; char < characters.length; char++) {
    boxTopBottom += '-';
    boxMid += ' ';
  }
  boxTopBottom += '-+';
  boxMid += ' |';
  console.log(boxTopBottom);
  console.log(boxMid);
  console.log(`| ${str} |`);
  console.log(boxMid);
  console.log(boxTopBottom);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');

//Launch school solution
function logInBoxLaunch(message) {
  let horizontalRule = `+${'-'.repeat(message.length + 2)}+`;
  let emptyLine = `|${' '.repeat(message.length + 2)}|`;

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${message} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
}


// Further exploration:

// Modify this function so that it truncates the message if it doesn't fit
// inside a maximum width provided as a second argument (the width is the
// width of the box itself). You may assume no maximum if the second
// argument is omitted.


function logInBoxTrunc(str, width) {
  if (str.length < width - 4 || width === undefined) {
    logInBox(str);
  } else {
    let line = '';
    for (let char = 0; line.length < width - 4; char += 1) {
      line += str[char];
    }
    logInBox(line);
  }
}

logInBoxTrunc('my name is ash scalzo', 20);
logInBoxTrunc('my name is ash scalzo', 50);
logInBoxTrunc('my name is ash scalzo');
logInBoxTrunc('my name is cork rockingham');
logInBoxTrunc('my name is cork rockingham', 20);
logInBoxTrunc('my name is cork rockingham', 50);
logInBoxTrunc('1234567890123456789012345678901234567890123456789012345');
logInBoxTrunc('1234567890123456789012345678901234567890123456789012345', 20);
logInBoxTrunc('1234567890123456789012345678901234567890123456789012345', 50);

// For a challenging but fun exercise, try word wrapping messages that
// are too long to fit, so that they appear on multiple lines but are
// still contained within the box. This isn't an easy problem, but it's
// doable with basic JavaScript.

// Madlibs is a simple game where you create a story template with
// "blanks" for words. You, or another player, then construct a list
// of words and place them into the story, creating an often silly or
// funny story as a result.

// Create a simple madlib program that prompts for a noun, a verb,
// an adverb, and an adjective, and injects them into a story that you create.

const readline = require('readline-sync');

function say(msg) {
  console.log(`=>${msg}`);
}

function getNoun() {
  say('Enter a noun:');
  return readline.question();
}

function getVerb() {
  say('Enter a verb:');
  return readline.question();
}

function getAdjective() {
  say('Enter an adjective:');
  return readline.question();
}

function getAdverb() {
  say('Enter an adverb:');
  return readline.question();
}

function invalidInput(input) {
  return input.trim() === '';
}

function validResponse(input) {
  return input === 'y' ||
         input === 'yes' ||
         input === 'n' ||
         input === 'no';
}

say('Welcome to Madlibs!');

while (true) {

  let noun = getNoun();
  while (invalidInput(noun)) {
    say('Invalid input.');
    noun = getNoun();
  }

  let verb = getVerb();
  while (invalidInput(verb)) {
    say('Invalid input.');
    verb = getVerb();
  }

  let adjective = getAdjective();
  while (invalidInput(adjective)) {
    say('Invalid input.');
    adjective = getAdjective();
  }

  let adverb = getAdverb();
  while (invalidInput(adverb)) {
    say('Invalid input.');
    adverb = getAdverb();
  }

  console.clear();

  say(`Do you ${verb} your ${noun} ${adverb}? That's hilarious!`);
  say(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy dog.`);
  say(`The ${noun} ${adverb} ${verb}s up blue Joe's turtle.`);

  say('===================================================================');

  say('Play again? (y/n)');
  let playAgain = readline.question().toLowerCase();
  while (!validResponse(playAgain)) {
    say('Play again? (y/n)');
    console.log(playAgain);
    playAgain = readline.question().toLowerCase();
  }

  if (playAgain === 'n' || playAgain === 'no') {
    break;
  } else {
    console.clear();
  }
}

say('Thanks for playing Madlibs!');

// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// // console output
// Do you walk your blue dog quickly? That's hilarious!
// The blue dog walks quickly over the lazy dog.
// The dog quickly walks up blue Joe's turtle.
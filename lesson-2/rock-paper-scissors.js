const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];      //let winsAndLosses = [0, 0];
const WINNING_COMBOS = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['spock', 'paper'],
  spock: ['rock', 'scissors']
};

let winsAndLosses = [0, 0];

function prompt(message) {
  console.log(`=> ${message}`);
}

function playerChoice(input) {
  switch (input) {
    case 'rock':
    case 'r':
      return 'rock';
    case 'paper':
    case 'p':
      return 'paper';
    case 'scissors':
    case 's':
      return 'scissors';
    case 'lizard':
    case 'l':
      return 'lizard';
    case 'spock':
    case 'x':
      return 'spock';
  }
  return input;
}

function playerWins(player, comp) {
  return WINNING_COMBOS[player].includes(comp);
}

function computerWins(player, comp) {
  return WINNING_COMBOS[comp].includes(player);
}

function displayWinner(player, comp) {
  if (playerWins(player, comp)) {
    prompt('You win!');
  } else if (computerWins(player, comp)) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie.");
  }
}

function countWinsAndLosses(player, comp) {
  if (playerWins(player, comp)) {
    winsAndLosses[0] += 1;
  } else if (computerWins(player, comp)) {
    winsAndLosses[1] += 1;
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let playerInput = readline.question().toLowerCase();
  let choice = playerChoice(playerInput);

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice!");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}.`);

  displayWinner(choice, computerChoice);
  countWinsAndLosses(choice, computerChoice);

  prompt('Do you want to play again? (y/n)');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}

console.clear();
prompt('Thanks for playing!');
prompt(`Total wins: ${winsAndLosses[0]} / Total losses: ${winsAndLosses[1]}`);
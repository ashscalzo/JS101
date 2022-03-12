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
let grandWins = [0, 0];

function prompt(message) {
  console.log(`=> ${message}`);
}

function playerChoice(playInput) {
  switch (playInput) {
    case 'rock':
    case 'r':
      return 'rock';
    case 'paper':
    case 'p':
      return 'paper';
    case 'scissors':
    case 'sc':
      return 'scissors';
    case 'lizard':
    case 'l':
      return 'lizard';
    case 'spock':
    case 'sp':
      return 'spock';
  }
  return playInput;
}

function playerWins(player, comp) {
  return WINNING_COMBOS[player].includes(comp);
}

function computerWins(player, comp) {
  return WINNING_COMBOS[comp].includes(player);
}

function displayWinner(player, comp) {
  if (playerWins(player, comp)) {
    prompt('You get one (1) point!');
  } else if (computerWins(player, comp)) {
    prompt('Computer gains one (1) point!');
  } else {
    prompt('Round tied.');
  }
}

function countWinsAndLosses(player, comp) {
  if (playerWins(player, comp)) {
    winsAndLosses[0] += 1;
  } else if (computerWins(player, comp)) {
    winsAndLosses[1] += 1;
  }
}

function newGame() {
  prompt('Do you want to play again? (yes or no)');
  let answer = readline.question().toLowerCase();
  while (answer !== 'n' &&
         answer !== 'no' &&
         answer !== 'y' &&
         answer !== 'yes') {
    prompt('Invalid input. Do you want to play again? (yes or no)');
    answer = readline.question().toLowerCase();
  }
  return answer;
}

while (true) {
  prompt('Welcome to Rock, Paper, Scissors, Lizard, Spock!');
  prompt('Winning choice receives 1 point per round.');
  prompt('First to 3 points is the Grand Winner.');

  do {
    prompt(`Choose one: ${VALID_CHOICES.join(', ')} (R, P, SC, L, or SP).`);
    let input = readline.question().toLowerCase();
    let choice = playerChoice(input);

    while (!VALID_CHOICES.includes(choice)) {
      prompt("That's not a valid choice!");
      input = readline.question().toLowerCase();
      choice = playerChoice(input);
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    prompt(`You chose ${choice}, computer chose ${computerChoice}.`);

    displayWinner(choice, computerChoice);
    countWinsAndLosses(choice, computerChoice);

    if (winsAndLosses[0] === 3) {
      prompt("You're the grand winner!");
      grandWins[0] += 1;
    } else if (winsAndLosses[1] === 3) {
      prompt("The computer is the grand winner! Try again!");
      grandWins[1] += 1;
    }

  } while (winsAndLosses[0] < 3 && winsAndLosses[1] < 3);

  let playAgain = newGame();
  if (playAgain === 'y' || playAgain === 'yes') {
    winsAndLosses = [0, 0];
  } else if (playAgain === 'n' || playAgain === 'no') {
    break;
  }
}

console.clear();
prompt('Thanks for playing!');
prompt(`You won ${grandWins[0]} game(s)!`);
prompt(`Computer won ${grandWins[1]} game(s)!`);
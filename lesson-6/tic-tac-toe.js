/*
1. Display initial empty 3x3 board
2. Ask the user to mark a square
3. computer marks a square
4. display updated board state
5.  if it's a winning board, display the winner
6. if the board is full, display tie
7. if neither player won and board is not full, go to #2
8. play again?
9. if yes, go to #1
10. goodbye!
*/
const readline = require('readline-sync');

const INITIAL_MARKER = '  ';
const HUMAN_MARKER = '❌';
const COMPUTER_MARKER = '⭕️';
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],    // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9],    // columns
  [1, 5, 9], [3, 5, 7]                // diagonals
];
let currentScore = [0, 0];            // index 0 is player points, index 1 is comp points

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayBoard(board) {
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`);

  console.log('');
  console.log('      |      |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('      |      |');
  console.log('------+------+------');
  console.log('      |      |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('      |      |');
  console.log('------+------+------');
  console.log('      |      |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('      |      |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function joinOr(arr, separator = ', ', conjunct = 'or') {
  if (arr.length === 0) {
    return '';
  } else if (arr.length === 1) {
    return `${arr[0]}`;
  } else if (arr.length === 2) {
    return arr.join(` ${conjunct} `);
  } else {
    let finalElement = arr.pop();
    return `${arr.join(separator)}` + separator + conjunct + ` ${finalElement}`;
  }
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return null;
}

function computerChoosesSquare(board) {
  let square;
  for (let index = 0; index < WINNING_LINES.length; index += 1) {     // offense
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, COMPUTER_MARKER);
    if (square) break;
  }

  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index += 1) {    // defense
      let line = WINNING_LINES[index];
      square = findAtRiskSquare(line, board, HUMAN_MARKER);
      if (square) break;
    }
  }

  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);     //!! allows function to return boolean value
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line += 1) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

function displayScore(score) {
  prompt(`Player has ${score[0]} point(s). Computer has ${score[1]} point(s).`);
}

function declareWinner() {
  if (currentScore[0] > currentScore[1]) {
    prompt(`Player wins!`);
    prompt(`Final Score:  
      Player: ${currentScore[0]} / Computer: ${currentScore[1]}`);
  } else if (currentScore[1] > currentScore[0]) {
    prompt(`Computer wins!`);
    prompt(`Final Score:  
      Player: ${currentScore[0]} / Computer: ${currentScore[1]}`);
  } else {
    prompt("It's a tie!");
    prompt(`Final Score:  
      Player: ${currentScore[0]} / Computer: ${currentScore[1]}`);
  }
}

prompt('Welcome to Tic-Tac-Toe!');

while (true) {
  console.clear();
  let board = initializeBoard();

  while (true) {
    console.clear();
    displayBoard(board);
    displayScore(currentScore);

    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  }

  displayBoard(board);

  if (someoneWon(board)) {
    if (detectWinner(board) === 'Player') {
      prompt('Player wins round!');
      currentScore[0] += 1;   // adds point for player
    } else if (detectWinner(board) === 'Computer') {
      prompt('Computer wins round!');
      currentScore[1] += 1;   // adds point for computer
    }
  } else {
    prompt("Round tied!");
  }

  prompt(`Current Score - Player: ${currentScore[0]} / Computer: ${currentScore[1]}`);

  prompt('Play again? (y / n)');
  let answer = readline.question().toLowerCase();
  while (answer !== 'y' && answer !== 'n') {
    prompt('Invalid response. Please enter y or n:');
    answer = readline.question().toLowerCase();
  }

  if (answer !== 'y') break;
}

console.clear();

declareWinner();

prompt('Thanks for playing!');
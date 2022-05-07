// Keep Score
// Keep track of how many times the player and computer each win, and report the scores after each game. 
// The first player to win 5 games wins the overall match (a series of 2 or more games). The score 
// should reset to 0 for each player when beginning a new match. Don't use any global variables. 
// However, you may want to use a global constant to represent the number of games needed to win the match.

const WINNING_POINTS = 3;


function keepScore() {
  let currentScore = [0, 0];      // index 0 is player points, index 1 is comp points
  if (detectWinner(board) === 'Player') {
    currentScore[0] += 1;
  } else if (detectWinner(board) === 'Computer') {
    currentScore[1] += 1;
  }
}

function declareWinner() {
  if (currentScore[0] === 3) {
    prompt(`Player wins!`);
    prompt(`Final Score:  
      Player: ${currentScore[0]} / Computer: ${currentScore[1]}`);
  }
}

function displayScore() {
  prompt(`Player has ${currentScore[0]} points. Computer has ${currentScore[1]} points.`);
}
const readline = require('readline-sync');
let totalScore = [0, 0];        // index 0 is player points, index 1 is dealer points
const WINNING_ROUNDS = 3;       // number of won rounds needed to win game
const DEALER_HIT_LIMIT = 17;    // number needed for dealer to stay
const POINT_LIMIT = 21;         // max number of points before a player busts

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function initializeDeck() {
  return {
    hearts: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
    diamonds: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
    clubs: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
    spades: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
  };
}

function dealCard(deck) {
  let suits = Object.keys(deck);     // allows us to access suits in object
  let randomSuit = suits[Math.floor(Math.random() * suits.length)];
  let randomCard = Math.floor(Math.random() * deck[randomSuit].length);
  let card = deck[randomSuit].splice(randomCard, 1);    //removes the dealt card from the available deck
  return card[0];
}

function hitOrStay() {
  prompt('Would you like to hit or stay?');
  return readline.question().toLowerCase();
}

function displayHand(hand) {
  let listOfCards = '';

  if (hand.length === 2) {
    listOfCards += hand.join(` and `);
  } else if (hand.length > 2) {
    let handMinusOne = hand.slice(0, hand.length - 1);
    let finalCard = hand[hand.length - 1];
    listOfCards += handMinusOne.join(', ') + `, and ${finalCard}`;
  }

  return listOfCards;
}

function addTotal(hand) {
  let total = 0;

  hand.forEach(value => {
    if (value === 'A') {
      total += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      total += 10;
    } else {
      total += value;
    }
  });

  hand.filter(value => value === 'A').forEach(_ => {
    if (total > POINT_LIMIT) total -= 10;
  });

  return total;
}


function busted(handTotal) {
  if (handTotal > POINT_LIMIT) {
    return true;
  } else {
    return false;
  }
}

function displayRoundScore(playerHand, dealerHand) {
  prompt(`Player's final hand: ${displayHand(playerHand)}
      Total: ${addTotal(playerHand)}`);
  prompt(`Dealer's final hand: ${displayHand(dealerHand)}
      Total: ${addTotal(dealerHand)}`);
}

function detectRoundWinner(playerPoints, dealerPoints) {
  if (playerPoints === POINT_LIMIT ||
    ((dealerPoints > POINT_LIMIT || playerPoints > dealerPoints) &&
      playerPoints < POINT_LIMIT)) {
    return 'player';
  } else if (playerPoints === dealerPoints) {
    return 'tie';
  } else {
    return 'dealer';
  }
}

function detectGrandWinner() {
  if (totalScore[0] === WINNING_ROUNDS) {
    return 'player';
  } else if (totalScore[1] === WINNING_ROUNDS) {
    return 'dealer';
  } else {
    return null;
  }
}

function displayRoundWinner(winner) {
  switch (winner) {
    case 'player':
      prompt('Player wins round!');
      break;
    case 'dealer':
      prompt('Dealer wins round!');
      break;
    default:
      prompt("It's a tie!");
      break;
  }
}

function displayGrandWinner(winner) {
  switch (winner) {
    case 'player':
      prompt('Congratulations! You won!');
      break;
    case 'dealer':
      prompt('Dealer is the grand winner! Try again!');
      break;
  }

  prompt(`Final Score:
          Player - ${totalScore[0]} points
          Dealer - ${totalScore[1]} points`);
}

function keepScore(winner) {
  if (winner === 'player') {
    totalScore[0] += 1;
  } else if (winner === 'dealer') {
    totalScore[1] += 1;
  }
}

function playAgain() {
  prompt ('Would you like to play again? Enter y or n:');
  return readline.question().toLowerCase();
}

while (true) {
  let playerTotal;
  let dealerTotal;

  while (totalScore[0] < WINNING_ROUNDS && totalScore[1] < WINNING_ROUNDS) {
    console.clear();
    let deckOfCards = initializeDeck();

    let playerHand = [];
    let dealerHand = [];

    prompt('Welcome to Twenty-One!');
    prompt(`First to ${WINNING_ROUNDS} points is the grand winner!`);

    playerHand.push(dealCard(deckOfCards));
    dealerHand.push(dealCard(deckOfCards));
    playerHand.push(dealCard(deckOfCards));
    dealerHand.push(dealCard(deckOfCards));

    while (true) {
      playerTotal = addTotal(playerHand);
      dealerTotal = addTotal(dealerHand);

      if (playerTotal >= POINT_LIMIT || dealerTotal === POINT_LIMIT) break;

      prompt(`Your cards are ${displayHand(playerHand)}.`);
      prompt(`Dealer's cards are [unknown] and ${dealerHand[1]}.`);
      prompt(`Player total: ${playerTotal}`);

      let answer = hitOrStay();
      while (answer !== 'hit' && answer !== 'stay') {
        prompt('Invalid input. Would you like to "hit" or "stay"?');
        answer = readline.question();
      }

      if (answer === 'hit') {
        prompt('Player chose to hit!');
        playerHand.push(dealCard(deckOfCards));
      } else if (answer === 'stay') {
        prompt('Player chose to stay.');
        break;
      }
    }


    if (busted(playerTotal)) {
      prompt('Player busted!');
    } else if (playerTotal < POINT_LIMIT) {
      while (dealerTotal < DEALER_HIT_LIMIT) {
        prompt('Dealer hit!');
        dealerHand.push(dealCard(deckOfCards));
        dealerTotal = addTotal(dealerHand);
      }
    }

    if (busted(dealerTotal)) {
      prompt('Dealer busted!');
    }

    displayRoundScore(playerHand, dealerHand);

    let winner = detectRoundWinner(playerTotal, dealerTotal);
    keepScore(winner);
    displayRoundWinner(winner);

    prompt('Enter any character to proceed.');
    readline.question();
  }

  console.clear();

  let grandWinner = detectGrandWinner(playerTotal, dealerTotal);

  displayGrandWinner(grandWinner);

  let newGame = playAgain();
  totalScore = [0, 0];

  while (newGame !== 'y' &&
         newGame !== 'yes' &&
         newGame !== 'n' &&
         newGame !== 'no') {
    prompt('Invalid input. Please enter y or n:');
    newGame = readline.question();
  }

  if (newGame === 'n' || newGame === 'no') break;

}

prompt('Thanks for playing!');
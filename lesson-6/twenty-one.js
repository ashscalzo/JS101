const readline = require('readline-sync');
const WINNING_ROUNDS = 3;       // number of won rounds needed to win game
const DEALER_HIT_LIMIT = 17;    // number needed for dealer to stay
const POINT_LIMIT = 21;         // max number of points before a player busts
const ACE_VALUE = 11;
const FACE_CARD_VALUE = 10;
let playerScore = 0;
let dealerScore = 0;

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
  if (randomSuit === 'hearts') {
    card.unshift('♥️');
  } else if (randomSuit === 'diamonds') {
    card.unshift('♦️');
  } else if (randomSuit === 'clubs') {
    card.unshift('♣️');
  } else if (randomSuit === 'spades') {
    card.unshift('♠️');
  }
  return card;
}

function initialDeal(deck, playerHand, dealerHand) {
  playerHand.push(dealCard(deck));
  dealerHand.push(dealCard(deck));
  playerHand.push(dealCard(deck));
  dealerHand.push(dealCard(deck));
}

function hitOrStay() {
  prompt('Would you like to hit or stay?');
  let answer = readline.question().toLowerCase();
  while (answer !== 'hit' &&
         answer !== 'h' &&
         answer !== 'stay' &&
         answer !== 's') {
    prompt('Invalid input. Would you like to "hit" or "stay"?');
    answer = readline.question();
  }
  return answer;
}

function joinAnd(hand) {
  let listOfCards = '';

  if (hand.length === 2) {
    listOfCards += `${hand[0].join('')} and ${hand[1].join('')}`;
  } else if (hand.length > 2) {
    let handMinusOne = hand.slice(0, hand.length - 1);
    handMinusOne.forEach(card => {
      listOfCards += `${card.join('')}, `;
    });
    let finalCard = hand[hand.length - 1].join('');
    listOfCards += `and ${finalCard}`;
  }

  return listOfCards;
}

function displayHandAndTotal(playerHand, dealerHand, playerPoints) {
  prompt(`Your cards are ${joinAnd(playerHand)}.`);
  prompt(`Dealer's cards are [unknown] and ${dealerHand[1].join('')}.`);
  prompt(`Player total: ${playerPoints}`);
}

function addTotal(hand) {
  let total = 0;

  hand.forEach(card => {
    if (card[1] === 'A') {
      total += ACE_VALUE;
    } else if (['J', 'Q', 'K'].includes(card[1])) {
      total += FACE_CARD_VALUE;
    } else {
      total += card[1];
    }
  });

  hand.forEach(card => {
    if (card[1] === 'A' && total > POINT_LIMIT) total -= 10;
  });
  // hand.filter(value => value === 'A').forEach(_ => {
  //   if (total > POINT_LIMIT) total -= 10;
  // });

  return total;
}

function busted(handTotal) {
  return handTotal > POINT_LIMIT;
}

function playerTurn(deck, playerHand, dealerHand, playerPoints) {
  while (playerPoints < POINT_LIMIT) {
    displayHandAndTotal(playerHand, dealerHand, playerPoints);

    let answer = hitOrStay();
    if (answer === 'hit' || answer === 'h') {
      prompt('Player chose to hit!');
      playerHand.push(dealCard(deck));
    } else if (answer === 'stay' || answer === 's') {
      prompt('Player chose to stay.');
      break;
    }

    playerPoints = addTotal(playerHand);
    // if (playerPoints >= POINT_LIMIT) break;
  }
}

function dealerTurn(deck, dealerHand, dealerPoints) {
  while (dealerPoints < DEALER_HIT_LIMIT) {
    prompt('Dealer hit!');
    dealerHand.push(dealCard(deck));
    dealerPoints = addTotal(dealerHand);

    // if (dealerPoints >= DEALER_HIT_LIMIT) break;
  }
}

function displayFinalHands(playerHand, dealerHand) {
  prompt(`Player's final hand: ${joinAnd(playerHand)}
      Total: ${addTotal(playerHand)}`);
  prompt(`Dealer's final hand: ${joinAnd(dealerHand)}
      Total: ${addTotal(dealerHand)}`);
}

function detectRoundWinner(playerPoints, dealerPoints) {
  if (
    playerPoints === POINT_LIMIT ||
    (playerPoints < POINT_LIMIT &&
    (busted(dealerPoints) || playerPoints > dealerPoints))
  ) {
    return 'player';
  } else if (playerPoints === dealerPoints) {
    return 'tie';
  } else {
    return 'dealer';
  }
}

function detectGrandWinner() {
  if (playerScore === WINNING_ROUNDS) {
    return 'player';
  } else if (dealerScore === WINNING_ROUNDS) {
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
          Player - ${playerScore} points
          Dealer - ${dealerScore} points`);
}

function keepScore(winner) {
  if (winner === 'player') {
    playerScore += 1;
  } else if (winner === 'dealer') {
    dealerScore += 1;
  }
}

function playAgain() {
  prompt('Would you like to play again? Enter y or n:');
  let newGame = readline.question().toLowerCase();
  while (newGame !== 'y' &&
         newGame !== 'yes' &&
         newGame !== 'n' &&
         newGame !== 'no') {
    prompt('Invalid input. Please enter y or n:');
    newGame = readline.question();
  }

  return newGame;
}

while (true) {
  let playerTotal;
  let dealerTotal;

  while (playerScore < WINNING_ROUNDS && dealerScore < WINNING_ROUNDS) {
    console.clear();
    let deckOfCards = initializeDeck();

    let playerHand = [];
    let dealerHand = [];

    prompt('Welcome to Twenty-One!');
    prompt(`First to ${WINNING_ROUNDS} points is the grand winner!`);

    initialDeal(deckOfCards, playerHand, dealerHand);

    playerTotal = addTotal(playerHand);
    dealerTotal = addTotal(dealerHand);

    playerTurn(deckOfCards, playerHand, dealerHand, playerTotal);

    if (busted(playerTotal)) {
      prompt('Player busted!');
    } else if (playerTotal < POINT_LIMIT) {
      dealerTurn(deckOfCards, dealerHand, dealerTotal, playerTotal);
    }

    if (busted(dealerTotal)) {
      prompt('Dealer busted!');
    }

    displayFinalHands(playerHand, dealerHand);

    let winner = detectRoundWinner(playerTotal, dealerTotal);
    keepScore(winner);
    displayRoundWinner(winner);

    prompt('Press Enter/Return to proceed.');
    readline.question();
  }

  console.clear();

  let grandWinner = detectGrandWinner(playerTotal, dealerTotal);

  displayGrandWinner(grandWinner);

  let newGame = playAgain();

  if (newGame === 'yes' || newGame === 'y') {
    playerScore = 0;
    dealerScore = 0;
  } else if (newGame === 'no' || newGame === 'n') break;
}

prompt('Thanks for playing!');
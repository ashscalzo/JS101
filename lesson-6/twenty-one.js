/*

Rules of Twenty-One
Deck: Start with a standard 52-card deck consisting of the 4 suits
(Hearts, Diamonds, Clubs, and Spades), and 13 values
(2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace).

Goal: The goal of Twenty-One is to try to get as close to 21 as possible
without going over. If you go over 21, it's a bust, and you lose.

Setup: The game consists of a dealer and a player. Both participants are
initially dealt a hand of two cards. The player can see their 2 cards, but
can only see one of the dealer's cards.

Card values: All of the card values are pretty straightforward, except for the
Ace. The cards with numbers 2 through 10 are worth their face value.
The Jack, Queen, and King are each worth 10. The Ace can be worth 1 or 11
depending on circumstances. Its value is determined each time a new card is
drawn from the deck. For example, if the hand contains a 2, an Ace, and a 5,
then the total value of the hand is 18. In this case, the Ace is worth 11
because the sum of the hand (2 + 11 + 5) doesn't exceed 21. Now, say another
card is drawn, and it happens to be an Ace. Your program must determine the
value of both Aces. If the sum of the hand (2 + 11 + 5 + 11) exceeds 21, then
one of the Aces must be worth 1, resulting in the hand's total value being 19.
What happens if another card is drawn and it also happens to be an Ace? It can
get tricky if there are multiple Aces in a hand, so your program must
account for that.

*/

/*
declare constant DECK_OF_CARDS      => function to initialize deck
  object

use Math.random to determine which cards are drawn and given to player/dealer
  create an array of the keys of object DECK_OF_CARDS
  randomize the suit, then the card chosen
    number cards have face value; J, Q, and K are worth 10; A can be 1 OR 11!!!
      account for multiple aces; when will they count as 1 vs 11?
player's turn, chooses hit or stay
  user input hit/stay
    create a way to account for invalid input
  continues until player busts or stays
dealer should hit until total >= 17
if dealer busts, player wins; if player busts, dealer wins
compare cards and declare winner
*/

const readline = require('readline-sync');
let totalScore = [0, 0];        // index 0 is player points, index 1 is dealer points
const WINNING_ROUNDS = 3;       // number of won rounds needed to win game
const DEALER_HIT_LIMIT = 17;    // number needed for dealer to stay
const POINT_LIMIT = 21;         // max number of points before a player busts

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function initializeDeck() {
  console.clear();
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

function displayRoundScore(player, dealer) {
  prompt(`Player's final hand: ${displayHand(player)}
      Total: ${addTotal(player)}`);
  prompt(`Dealer's final hand: ${displayHand(dealer)}
      Total: ${addTotal(dealer)}`);
}

function detectRoundWinner(player, dealer) {
  if (player === POINT_LIMIT ||
    ((dealer > POINT_LIMIT || player > dealer) && player < POINT_LIMIT)) {
    return 'player';
  } else if (player === dealer) {
    return 'tie';
  } else {
    return 'dealer';
  }
}

function detectGrandWinner() {
  if (totalScore[0] === 3) {
    return 'player';
  } else if (totalScore[1] === 3) {
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
      if (playerTotal >= POINT_LIMIT) break;

      prompt(`Your cards are ${displayHand(playerHand)}.`);
      prompt(`Dealer's cards are [unknown] and ${dealerHand[1]}.`);
      prompt(`Player total: ${playerTotal}`);

      if (playerTotal >= POINT_LIMIT || dealerTotal === POINT_LIMIT) break;

      let answer = hitOrStay();
      while (answer !== 'hit' && answer !== 'stay') {
        prompt('Invalid input. Would you like to hit or stay?');
        answer = readline.question();
      }

      if (answer === 'hit') {
        prompt('Player chose to hit!');
        playerHand.push(dealCard(deckOfCards));
        playerTotal = addTotal(playerHand);
      } else if (answer === 'stay') {
        prompt('Player chose to stay.');
        break;
      }
    }

    if (playerTotal < POINT_LIMIT) {
      while (dealerTotal < DEALER_HIT_LIMIT) {
        prompt('Dealer hit!');
        dealerHand.push(dealCard(deckOfCards));
        dealerTotal = addTotal(dealerHand);
      }
    }

    if (busted(playerTotal)) {
      prompt('Player busted!');
    } else if (busted(dealerTotal)) {
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
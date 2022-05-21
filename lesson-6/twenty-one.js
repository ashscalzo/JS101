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
declare constant DECK_OF_CARDS
  object

use Math.random to determine which cards are drawn and given to player/dealer
  create an array of the keys of object DECK_OF_CARDS
  randomize the suit, then the card chosen
    number cards have face value; J, Q, and K are worth 10; A can be 1 OR 11!!!
      account for multiple aces; when will they count as 1 vs 11?

user input hit/stay
  create a way to account for invalid input

*/

const readline = require('readline-sync');

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
  if (hand.length === 2) {
    return hand.join(` and `);
  } else if (hand.length > 2) {
    let finalCard = hand.pop();
    return `${hand.join(', ')}, and ${finalCard}`;
  }
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
    if (total > 21) total -= 10;
  });

  return total;
}

while (true) {
  let deckOfCards = initializeDeck();

  let playerHand = [];
  let dealerHand = [];
  let playerTotal;
  let dealerTotal;

  prompt('Welcome to Twenty-One!');

  playerHand.push(dealCard(deckOfCards));
  dealerHand.push(dealCard(deckOfCards));
  playerHand.push(dealCard(deckOfCards));
  dealerHand.push(dealCard(deckOfCards));

  while (true) {
    playerTotal = addTotal(playerHand);

    prompt(`Your cards are ${displayHand(playerHand)}.`);
    prompt(`Dealer's cards are [unknown] and ${dealerHand[1]}.`);
    prompt(`Player total: ${playerTotal}`);

    if (playerTotal >= 21) break;

    let answer = hitOrStay();

    if (answer === 'hit') {
      prompt('Player chose to hit!');
      playerHand.push(dealCard(deckOfCards));
    } else if (answer === 'stay') {
      prompt('Player chose to stay.');
      break;
    } else {
      prompt('Invalid input. Would you like to hit or stay?');
      answer = hitOrStay();
    }
  }

  if (playerTotal === 21) {
    prompt('21! Player wins!');
    break;
  } else if (playerTotal > 21) {
    prompt('Bust! You lose!');
    break;
  }

}

prompt('Thanks for playing!');
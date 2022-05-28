**RULES**
  ## DECK: 
    -Start with a standard 52-card deck consisting of the 4 suits
    -(Hearts, Diamonds, Clubs, and Spades), and 13 values
    -(2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace).

  ## Goal: 
    - The goal of Twenty-One is to try to get as close to 21 as possible without going over. If you go over 21, it's a bust, and you lose.

  ## Setup: 
    - The game consists of a dealer and a player. Both participants are initially dealt a hand of two cards. 
    - The player can see their 2 cards, but can only see one of the dealer's cards.

  ## Card values: 
    - All of the card values are pretty straightforward, except for the Ace. 
    - The cards with numbers 2 through 10 are worth their face value.
    - The Jack, Queen, and King are each worth 10. 
    - The Ace can be worth 1 or 11  depending on circumstances. 
      - Its value is determined each time a new card is drawn from the deck. 
        - For example, if the hand contains a 2, an Ace, and a 5, then the total value of the hand is 18. In this case, the Ace is worth 11 because the sum of the hand (2 + 11 + 5) doesn't exceed 21. 
        - Now, say another card is drawn, and it happens to be an Ace. Your program must determine the value of both Aces. 
        - If the sum of the hand (2 + 11 + 5 + 11) exceeds 21, then one of the Aces must be worth 1, resulting in the hand's total value being 19.
        - What happens if another card is drawn and it also happens to be an Ace? It can get tricky if there are multiple Aces in a hand, so your program must account for that.


**PEDAC / PSEUDOCODE**
declare constant DECK_OF_CARDS => function to initialize deck
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
  use loop
if dealer busts, player wins; if player busts, dealer wins
compare cards and declare winner

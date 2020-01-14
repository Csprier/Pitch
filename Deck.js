class Deck {
  constructor() {
    /**
     * Every time a new instance of Deck is created, 
     * reset the deck and shuffle it 
     */
    this.deck = [];
    this.resetDeck();
    this.shuffle();
  }

  /** - RESET DECK -----
   * Shuffles the deck to be ordered by suit and number
   */
  resetDeck(){
    this.deck = [];
    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

    for (let suit in suits) {
      for (let value in values) {
        this.deck.push(`${values[value]} of ${suits[suit]}`);
      }
    }
    console.log(this.deck);
  }

  /** - SHUFFLE THE DECK ----- */
  shuffle() {
    const { deck } = this;
    let m = deck.length, i;

    while (m) {
      i = Math.floor(Math.random() * m--);
      [ deck[m], deck[i] ] = [ deck[i], deck[m] ];
    }
    return this;
  };

  /** - DEAL A CARD ----- */
  dealCard(){
    return this.deck.pop();
  };

}; // end class

let TestDeck = new Deck();

function dealThree(playerHand) {
  playerHand.push(TestDeck.dealCard());
  playerHand.push(TestDeck.dealCard());
  playerHand.push(TestDeck.dealCard());
};

let p1hand = [],
    p2hand = [],
    p3hand = [];

// first 3 cards of a players hand are dealt
dealThree(p1hand);
dealThree(p2hand);
dealThree(p3hand);
// second 3, total of 6 cards in their hand
dealThree(p1hand);
dealThree(p2hand);
dealThree(p3hand);

console.log(p1hand);
console.log(p2hand);
console.log(p3hand);


const { Player } = require('./Player');
const { Deck } = require('./Deck');

class Pitch {
  constructor(num) {
    this.deck = new Deck();
    this.winningScore = num || 7;
    this.players = [];
    this.trump = '';
  };

  addPlayer(player) {
    let newPlayer = new Player(player);
    this.players.push(newPlayer);
  };

  dealThree(playerHand) {
    playerHand.push(this.deck.dealCard());
    playerHand.push(this.deck.dealCard());
    playerHand.push(this.deck.dealCard());
  };

}; // end constructor

module.exports = { Pitch };
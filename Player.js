class Player {
  constructor(playerName) {
    this.name = playerName;
    this.hand = [];
    this.score = 0;
    this.counter = 0;
    this.bid = 0;
  };
};

module.exports = { Player };
const { Pitch } = require('./Pitch');

let GAME = new Pitch();

GAME.addPlayer('Cam');
GAME.addPlayer('Robot');
console.log(GAME);
let P1 = GAME.players[0];
let P2 = GAME.players[1];
GAME.dealThree(P1.hand); // 1
GAME.dealThree(P2.hand); // 2
GAME.dealThree(P1.hand); // 1
GAME.dealThree(P2.hand); // 2
console.log(GAME.players);
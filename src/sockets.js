const socketIO = require('socket.io');

function init(server) {
  const gameState = {
    started: false,
    players: {},
  };

  const io = socketIO(server);
  io.on('connection', (socket) => {
    console.log('A user connected!');

    socket.on('set-name', ({ name } = {}) => {
      if (!name || typeof name !== 'string') return;
      gameState.players[socket.id] = name;
      console.log(gameState.players);
    });

    socket.on('disconnect', () => {
      delete gameState.players[socket.id];
      console.log('A user disconnected!');
    });
  }); // end io.on()
}; // end fn();

module.exports = init;
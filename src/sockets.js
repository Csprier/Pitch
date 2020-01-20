const socketIO = require('socket.io');

function init(server) {
  const io = socketIO(server);
  io.on('connection', (socket) => {
    console.log('A user connected!');
  });
};

module.exports = init;
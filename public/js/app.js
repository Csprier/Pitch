const socket = io();

socket.on('connect', () => {
  const name = prompt('Enter a name!');
  socket.emit('set-name', { name });
});

socket.on('chat message', (msg) => {
  socket.emit('chat-message', { message: msg });
  console.log('message: ' + msg);
});
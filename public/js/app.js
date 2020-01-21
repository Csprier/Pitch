const socket = io();

socket.on('connect', () => {
  const name = prompt('Enter a name!');
  socket.emit('set-name', { name });
});

socket.on('connect', () => {
  console.log(socket);
  // console.log(socket.id);
});

socket.on('chat message', (msg) => {
  socket.emit('chat message', { message: msg });
  console.log('message: ' + msg);
});
const socket = io();

socket.on('connect', () => {
  const name = prompt('Enter a name!');
  socket.emit('set-name', { name });
});
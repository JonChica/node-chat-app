let socket = io();
socket.on('connect', () => {
  console.log('Connected to server');
  socket.emit('createMessage', {
    to: 'laura',
    text: 'Hey! Here Jon.'
  });
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});

socket.on('newMessage', (message) => {
  console.log('New message: ', message);
});
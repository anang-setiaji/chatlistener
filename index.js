var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.send('server running');
});

io.on('connection', (socket) => {
  socket.on('newMessage', () => {
    console.log('ada pesan!!');
    io.sockets.emit('incomingMessage');
    io.sockets.emit('updateWarning');
  })
  
  console.log('a user connected');
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
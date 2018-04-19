app = require('./config/server.js')();

var server = app.listen('8000', function() {

	console.log("Servidor NODEJS - localhost:8000");
});

var io = require('socket.io').listen(server);
app.set('io', io);

io.on('connect', function(socket) {

	socket.on('disconnect', function() {

		console.log("Conexão websocket finalizada!");
	});

	socket.on('sendMessage', function(data) {

		socket.emit('receiveMessage', data);
		socket.broadcast.emit('receiveMessage', data);

		if(parseInt(data.user_send) == 0) {
			
			socket.emit('users', data);
			socket.broadcast.emit('users', data);
		}
	});
});
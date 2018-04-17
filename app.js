app = require('./config/server.js')();

var server = app.listen('8000', function() {

	console.log("Servidor NODEJS - localhost:8000");
});

require('socket.io').listen(server);
module.exports = function(app) {

	app.get('/chat', function(request, response) {

		app.controllers.chatControllers.index(app, request, response);
	});

	app.post('/chat', function(request, response) {

		app.controllers.chatControllers.index(app, request, response);
	});
}
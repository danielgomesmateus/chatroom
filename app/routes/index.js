module.exports = function(app) {

	app.get('/', function(request, response) {

		app.controllers.indexController.index(app, request, response);
	});

	app.post('/', function(request, response) {

		app.controllers.indexController.index(app, request, response);
	});
}
module.exports.index = function(app, request, response) {

	var validation = {};

	if(request.method == 'POST') {

		var data = request.body;

		request.assert('username', 'Informe o nome de usuário!').notEmpty();
		request.assert('username', 'O nome de usuário informado é inválido!').len(3, 20);

		validation = request.validationErrors();

		if(validation) {

			response.render('index', {errors: validation});
			return;
		}

		response.redirect('/chat');
		return;
	}

	response.render('index', {errors: validation});
}
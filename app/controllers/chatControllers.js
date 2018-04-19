module.exports.index = function(app, request, response) {
	
	request.assert('username', 'Informe o nome de usuário!').notEmpty();
	request.assert('username', 'O nome de usuário informado é inválido!').len(3, 20);

	validation = request.validationErrors();

	if(validation) {

		response.render('index', {errors: validation});
		return;
	}

	var context = {
		'username': request.body.username,
		'msg': 'acessou o chat!' 
	}

	app.get('io').emit('msgUser', context);

	response.render('chat', {'name': request.body.username});
}
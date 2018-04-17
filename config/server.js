var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var validator = require('express-validator');

var app = express();

app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(express.static('app/public'));
app.use(bodyParser.urlencoded({extends : true}));
app.use(validator());

consign({'cwd' : 'app'})
	.include('routes')
	.then('controllers')
	.then('models')
	.into(app);


module.exports = function() {

	return app;
}
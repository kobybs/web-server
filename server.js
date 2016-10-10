var express = require('express');
var app = express();
var PORT = 3000;

var middleware = require('./middleware.js');
/*var middleware = {
		requireAuth: function(req, res, next){
			console.log('private route hit');
			next();
		},
		logger: function (req, res, next){		
			console.log('req: ' + new Date().toString() + req.method + ' ' + req.originalUrl);
			next();
		} 
}*/

app.use(middleware.logger);

app.get('/about', middleware.requireAuth, function (req, res) {
	res.send('about us');
} );

app.use(express.static(__dirname + '/public'));
//console.log(__dirname);
app.listen(PORT, function (){
	console.log('exp server started on port ' + PORT);
} );
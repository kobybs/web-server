

var middleware = {
	requireAuth: function(req, res, next){
		console.log('private route hit');
		next();
	},
	logger: function (req, res, next){		
		console.log('req: ' + new Date().toString() + req.method + ' ' + req.originalUrl);
		next();
	} 
}

module.exports = middleware;
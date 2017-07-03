var restify = require('restify');
var path = require('path');
var constants = require('./constants')

var server = restify.createServer();
server.get('/rest', function(req, res, next){
	res.send('hello rest');
	next();
});

server.get(/\/?.*/, restify.serveStatic({
	directory: path.join(constants.applicationRoot, 'app'),
	default: 'index.html'
}))

server.listen(process.env.PORT || 1234, function() {
  console.log('%s listening at %s', server.name, server.url);
});

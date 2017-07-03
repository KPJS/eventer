var restify = require("restify");

var server = restify.createServer();
server.get('/rest', function(req, res, next){
	res.send('hello rest');
	next();
});

// server.get('/', restify.serveStatic({
// 	directory: './app',
// 	file: 'index.html'
// }));


server.get('.*', restify.serveStatic({
	directory: '.\\app',
	default: 'index.html'
}))

// server.get(/\/css\/?.*/, restify.serveStatic({
// 	directory: './app/css',
// 	default: 'default.css'
// }));



server.listen(process.env.PORT || 1234, function() {
  console.log('%s listening at %s', server.name, server.url);
});

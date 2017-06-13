var http = require("http");

http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   response.end('Hello World New\n');
}).listen(process.env.PORT || 1234);

console.log('Server running');
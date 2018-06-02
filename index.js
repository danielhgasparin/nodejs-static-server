const http = require('http');
const static = require('node-static');

const fileServer = new static.Server('./public'); // Configure folder with the static content to serve.

const server = http.createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
});

server.listen(8080); // Configure port to listen.
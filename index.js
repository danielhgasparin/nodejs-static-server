var static = require('node-static');

var fileServer = new static.Server('./public'); // Configure folder with the static content to serve

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
}).listen(8080); // Configure port to listen
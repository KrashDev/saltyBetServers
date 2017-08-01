var http = require("http");

var PORT = 7000;

function handleREquest(req, res) {
    res.end("man you are soo good looking" + req.url);
}

var server = http.createServer(handleREquest);

server.listen(PORT, function() {
    console.log("server listening on: http://localhost:${PORT}');

});
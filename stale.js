var http = require("http");

var PORT = 7500;

function handleREquest(req, res) {
    res.end("I think it's time to hit the gym" + req.url);
}

var server = http.createServer(handleREquest);

server.listen(PORT, function() {
    console.log("server listening on: http://localhost:${PORT}');

});
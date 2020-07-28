var http = require("http");
var fs = require('fs');
var port = 3000;
var serverUrl = "127.0.0.1";

var server = http.createServer(function(req, res) {
  if(req.url == "/gameArea.html") {
    fs.readFile("gameArea.html", function(err, text){
      res.setHeader("Content-Type", "text/html");
      res.end(text);
    });
    return;
  }

  res.setHeader("Content-Type", "text/html");
  res.end();

});

console.log("Starting web server at " + serverUrl + ":" + port);
server.listen(port, serverUrl);
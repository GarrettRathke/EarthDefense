var http = require("http");
var fs = require('fs');
const PORT = process.env.PORT || 80;

var server = http.createServer(function(req, res) {
  if(req.url == "/index.html") {
    fs.readFile("index.html", function(err, text){
      res.setHeader("Content-Type", "text/html");
      res.end(text);
    });
    return;
  }

  res.setHeader("Content-Type", "text/html");
  res.end();

});

console.log("Starting web server at " + ":" + PORT);
server.listen(PORT);

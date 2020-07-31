var http = require("http");
var fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 80;

//var server = http.createServer(function(req, res) {
//  if(req.url == path.join(__dirname + '/index.html')) {
//    fs.readFile(path.join(__dirname + '/index.html'), function(err, text){
//      res.setHeader("Content-Type", "text/html");
//      res.end(text);
//    });
//    return;
// }

//  res.setHeader("Content-Type", "text/html");
//  res.end();

//});

fs.readFile('./index.html', function (err, html) {
  if (err) {
      throw err; 
  }       
  http.createServer(function(request, response) {  
      response.writeHeader(200, {"Content-Type": "text/html"});  
      response.write(html);  
      response.end();  
  }).listen(PORT);
});
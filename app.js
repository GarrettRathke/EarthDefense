var http = require("http");
var fs = require('fs');
const path = require('path');

// this is to run under heroku hosting
const PORT = process.env.PORT || 80;

// uncomment this and run <node app.js> to run as local host
//const PORT = 5000;

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
var express = require('express');

var app = express.createServer(express.logger());

var fs = requiere('fs');
var fstring = fs.readFileSync(index.html,{encoding: utf-8} 

app.get('/', function(request, response) {
//  response.send('Hello World 2!');
  response.send(fstring);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

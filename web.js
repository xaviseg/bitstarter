var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
//var fstring = fs.readFileSync('index.html',{encoding: 'utf-8'}); 
var fbuf = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  response.send(fbuf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

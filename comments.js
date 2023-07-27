// Create web server

var express = require('express');
var app = express();

// Serve static files
app.use(express.static('public'));

// Create server
var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Server started at http://%s:%s', host, port);
});




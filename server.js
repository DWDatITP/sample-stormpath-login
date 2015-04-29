var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

app.get('/', function)req, res){
  var world = 'World';
  res.send('Hello ' + world);
});

app.listen(port, function(){
  console.log('listening on port ',port);
});

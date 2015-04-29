var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

app.get('/', function(req, res){
  console.log('req.user:',req.user);
  if (req.user) {
    console.log('logged in as req.user: ',req.user);
    res.send('You are logged in as : ' + req.user.username);
  } else {
    res.send('Visit <a href="/login">/login</a> or <a href="/register">/register</a>.');
  }
});

app.listen(port, function(){
  console.log('listening on port ',port);
});

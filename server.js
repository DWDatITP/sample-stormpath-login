var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var stormpath = require('express-stormpath');

app.use(stormpath.init(app, {
  apiKeyId: process.env.STORMPATH_API_KEY_ID,
  apiKeySecret: process.env.STORMPATH_API_KEY_SECRET,
  secretKey:    process.env.STORMPATH_SECRET_KEY,
  application:  process.env.STORMPATH_URL
}));

app.listen(port, function(){
  console.log('listening on port ',port);
});

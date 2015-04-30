var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

// This is the middleware that we use to initialize
// stormpath
var stormpath = require('express-stormpath');

// Tell the app to use the stormpath middleware
// These environment variables must all be set or
// stormpath will error. When you add the stormpath addon at
// heroku via `heroku addons:add stormpath`, heroku sets these
// config (environment) variables for you.
// When you run the server locally, you must set them yourself
// (see the README.md for more).
app.use(stormpath.init(app, {
  apiKeyId:     process.env.STORMPATH_API_KEY_ID,
  apiKeySecret: process.env.STORMPATH_API_KEY_SECRET,
  secretKey:    process.env.STORMPATH_SECRET_KEY,
  application:  process.env.STORMPATH_URL,
}));

app.get('/', function(req, res){
  if (req.user) {
    // if the user is already signed in, redirect to the /secret page
    console.log('/ req.user =',req.user);
    res.redirect('/secret');
  } else {
    // if the user is not signed in, show a link to the login page
    res.send('Visit <a href="/login">/login</a> to log in.');
  }
});

// This path uses the stormpath.loginRequired middleware to make it
// so that if the user isn't signed in it will redirect them to /login.
app.get('/secret', stormpath.loginRequired, function(req, res) {
  var user = req.user;

  // Because we used the `stormpath.loginRequired` middleware,
  // we *know* that `req.user` will exist at this point.

  console.log('/secret req.user =',user);
  res.send('Hello, you are: ' + user.fullName);
});

app.listen(port, function(){
  console.log('listening on port ',port);
});

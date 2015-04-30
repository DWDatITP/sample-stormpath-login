# Sample Stormpath Express Heroku App

This sample app shows how to use the stormpath addon
from heroku with express.

For more info or additional help, see the [Stormpath Docs](https://devcenter.heroku.com/articles/stormpath#using-with-express-js).

## Install

To run this sample app locally:

  * clone it:
  * `git clone https://github.com/DWDatITP/sample-stormpath-login.git`
  * cd to the directory:
  * `cd sample-stormpath-login`
  * install npm dependencies:
  * `npm install`
  * *Important*: create a `.env` file with your stormpath credentials, see below
  * *After* you've set up your .env file, run this command to start your server:
  * `env $(cat .env) nodemon server.js`

### Setting up stormpath

You must have a heroku app for this project in order to add the stormpath addon,
so create a heroku app if you haven't already. (If you aren't sure if you have a heroku
app already, try running `heroku info`).

Create heroku app if you need to: `heroku create`

Then add the stormpath addon: `heroku addons:add stormpath`

You must create a `STORMPATH_SECRET_KEY` config environment variable at heroku:

```
heroku config:set STORMPATH_SECRET_KEY=`openssl rand -base64 40`
```

Now, when you type `heroku config`, it should show you environment variables
matching the environment variables that stormpath needs (in lines 16-21 of server.js).
You need to copy and paste these into a `.env` file.

For example, if your heroku config shows that `STORMPATH_API_KEY_ID` equals "abcdef123",
your `.env` file would have a line like so:

`STORMPATH_API_KEY_ID=abcdef123`

Your `.env` file should have 4 lines in it, one for each of the environment variables.

Now that your `.env` file is set up, you can run the command described above to run the app locally.

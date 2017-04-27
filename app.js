const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const passwordHash = require('password-hash');

// passport
const Strategy = require('passport-local').Strategy;

// mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library')

// set
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({extended: false}));

// route
const books = require('./routes/book');
const users = require('./routes/user');

// use the route
app.use('/api/books', books);
app.use('/api/users', users);

// use passport
passport.use(new Strategy(
  function(username, password, done) {
    let User = require('./models/user');
    User.findOne({username: username}, (err, user) => {
      if (passwordHash.verify(password, user.password)) {
        var authenticated = false
        done(null, {user: user, authenticated: true})
      }else {
        done('username or password is not exist')
      }
    })
  }
))

app.listen(app.get('port'), () => {
  console.log(`app listening on ${app.get('port')}`);
})

module.exports = app;


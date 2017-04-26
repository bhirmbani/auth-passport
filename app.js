const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var Strategy = require('passport-local').Strategy;
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


app.listen(app.get('port'), () => {
  console.log(`app listening on ${app.get('port')}`);
})

module.exports = app;


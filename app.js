const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var Strategy = require('passport-local').Strategy;

// set
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({extended: false}));

// route
const books = require('./routes/book');

// use the route
app.use('/api/books', books);

// use passport


app.listen(app.get('port'), () => {
  console.log(`app listening on ${app.get('port')}`);
})

module.exports = app;


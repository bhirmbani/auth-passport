const User = require('../models/user');
const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');
const methods = {};

methods.signup = (req, res, next) => {
  User.create({
    username: req.body.username,
    password: passwordHash.generate(req.body.password),
    role: req.body.role
  }, (err, done) => {
    if(err) {
      res.send(err)
    } else {
      res.send(done);
    }
  });
}

methods.gets = (req, res, next) => {
  User.find({}, (err, users) => {
    if (err) throw err;
    res.send(users);
  });
}

methods.login = (req, res, next) => {
  let user = req.user;
  let token = jwt.sign({
    username: req.user.username,
    password: req.user.password,
    role: req.user.role
  }, 'secret', {expiresIn: '1h'})
  res.send(token);
}

methods.findByUsername = (req, res, next) => {
  User.find({ username: req.body.username }, (err, done) => {
    if (err) res.send(err);
    res.send(done);
  })
}

methods.delete = (req, res, next) => {
  User.remove({ username: req.params.username }, (err, done) => {
    if (err) res.send(err)
      res.send(`user successfully deleted`);
  })
}

methods.update = (req, res, next) => {
  User.findOneAndUpdate({ username: req.params.username }, { $set: req.body }, (err, done) => {
    if (err) res.send(err)
      res.send(`user successfully edited`);
  })
}

module.exports = methods;
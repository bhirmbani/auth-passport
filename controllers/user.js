const User = require('../models/user');
const passwordHash = require('password-hash');
const methods = {};

methods.add = (req, res, next) => {
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

module.exports = methods;
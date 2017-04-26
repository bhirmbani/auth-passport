const Book = require('../models/book');
const methods = {};

methods.add = (req, res, next) => {
  Book.create(req.body, (err, book) => {
    if (err) throw err;
    res.send(book);
  });
}

methods.gets = (req, res, next) => {
  Book.find({}, (err, books) => {
    if (err) throw err;
    res.send(books);
  });
}

// by id
methods.get = (req, res, next) => {
  Book.findById(req.params.id, (err, book) => {
    if (err) throw err;
    res.send(book)
  });
}

methods.update = (req, res, next) => {
  Book.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
  .exec((err, book) => {
    if (err) throw err;
    res.send(book);
  });
}

methods.delete = (req, res, next) => {
  Book.findByIdAndRemove(req.params.id)
  .exec((err, book) => {
    if (err) throw err;
    res.send(book);
  });
}

// GET ?title=blabla
methods.findTitle = (req, res, next) => {
  Book.find({ title: {$regex: req.query.title, $options: 'i'} }, (err, book) => {
    if(err) throw err;
    res.send(book);
  });
}

module.exports = methods;
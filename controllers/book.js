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

// by isbn
methods.get = (req, res, next) => {
  Book.find({ isbn: req.body.isbn }, (err, book) => {
    if(err) res.send(err)
    res.send(book)
  })
}

methods.edit = (req, res, next) => {
  Book.findOneAndUpdate({ isbn: req.params.isbn }, { $set: req.body }, (err, done) => {
    if (err) res.send(err)
    res.send(`book successfully edited`);
  })
}

methods.delete = (req, res, next) => {
  Book.remove({ isbn: req.params.isbn }, (err, done) => {
    if (err) res.send(err)
    res.send(`book successfully deleted`);
  })
}

// GET ?title=blabla
// methods.findTitle = (req, res, next) => {
//   Book.find({ title: {$regex: req.query.title, $options: 'i'} }, (err, book) => {
//     if(err) throw err;
//     res.send(book);
//   });
// }

module.exports = methods;
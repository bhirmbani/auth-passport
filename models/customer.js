const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema ({
  name: String,
  memberId: String,
  address: String,
  zipcode: String,
  phone: String
});

const Book = mongoose.model('Customer', customerSchema);

module.exports = Book;
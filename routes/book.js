const express = require('express');
const router = express.Router();
const booksController = require('../controllers/book');
const isLoginSuccess = require('../helpers/auth');



router.get('/', booksController.gets);

module.exports = router;
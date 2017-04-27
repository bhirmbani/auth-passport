const express = require('express');
const router = express.Router();
const booksController = require('../controllers/book');
const isLoginSuccess = require('../helpers/auth');



router.get('/', isLoginSuccess.auth, booksController.gets);
router.post('/add', isLoginSuccess.auth, booksController.add);
router.post('/find', isLoginSuccess.auth, booksController.get);
router.put('/edit/:isbn', isLoginSuccess.auth, booksController.edit);
router.delete('/delete/:isbn', isLoginSuccess.auth, booksController.delete);
// router.get('/find/:title', isLoginSuccess.auth, booksController.findTitle);

module.exports = router;
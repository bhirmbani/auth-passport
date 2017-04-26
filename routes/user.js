const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const isLoginSuccess = require('../helpers/auth');


router.get('/', userController.gets);
router.post('/', userController.add);

module.exports = router;
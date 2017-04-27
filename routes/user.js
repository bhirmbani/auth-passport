const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/user');
const isLoginSuccess = require('../helpers/auth');


router.get('/', isLoginSuccess.auth, userController.gets);
router.put('/edit/:username', isLoginSuccess.auth, userController.update);
router.delete('/delete/:username', isLoginSuccess.auth, userController.delete);
router.post('/find', isLoginSuccess.auth, userController.findByUsername);
router.post('/signup', userController.signup);
router.post('/login', passport.authenticate('local', {session: false}), userController.login);

module.exports = router;
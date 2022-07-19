var express = require('express');
const router = express.Router();

const UserController = require('../app/controllers/UserController');

router.get('/register', UserController.apiAuth);
router.get('/login', UserController.loginView);
router.get('/user', UserController.views);
router.post('/storeRegister', UserController.storeRegister);
router.post('/storeLogin', UserController.storeLogin);

module.exports = router;

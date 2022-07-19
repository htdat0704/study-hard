var express = require('express');
const router = express.Router();

const verifyToken = require('../app/middleware/auth');

const UserController = require('../app/controllers/UserController');

router.get('/', verifyToken, UserController.show);

module.exports = router;

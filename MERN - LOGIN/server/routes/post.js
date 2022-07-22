var express = require('express');
const router = express.Router();
const verifyToken = require('../app/middleware/auth')

const PostController = require('../app/controllers/PostController');

router.post('/create',verifyToken,PostController.createPost)
router.put('/update/:id',verifyToken,PostController.updatePost)
router.get('/',verifyToken,PostController.seePost)

module.exports = router
var express = require('express');
const router = express.Router();
const verifyToken = require('../app/middleware/auth');
const PostController = require('../app/controllers/PostController');

router.get('/views', PostController.views);
router.get('/create', verifyToken, PostController.create);
router.get('/edit-post/:id', PostController.editPost);
router.post('/stored',verifyToken, PostController.stored);
router.put('/:id', PostController.putPost);

module.exports = router;

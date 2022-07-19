var express = require('express');
const router = express.Router();
const sortMiddleware = require('../app/middlewares/SortMiddleware');

const meController = require('../app/controllers/meController');

router.get('/trash/courses', meController.trashCourses);
router.get('/stored/courses',meController.storedCourses);

module.exports = router;

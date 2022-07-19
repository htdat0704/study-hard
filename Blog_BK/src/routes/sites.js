var express = require('express');
const router = express.Router();

const SitesController = require('../app/controllers/SitesController');

router.get('/searchs', SitesController.searchs);
router.get('/', SitesController.news);

module.exports = router;

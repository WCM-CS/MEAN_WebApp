const express = require('express');
const router = express.Router();

const ctrlNews = require('../controllers/news');

/* Get News Page */
router.get('/', ctrlNews.news);

module.exports = router;
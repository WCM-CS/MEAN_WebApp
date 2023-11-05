const express = require('express');
const router = express.Router();

const ctrlAbout = require('../controllers/about');

/* Get About Page */
router.get('/', ctrlAbout.about);

module.exports = router;
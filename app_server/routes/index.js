const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/main');

/* Get Main Page */
router.get('/', ctrlMain.index);

module.exports = router;

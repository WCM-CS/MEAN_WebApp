const express = require('express');
const router = express.Router();

const ctrlTravel = require('../controllers/travel');

/* Get home page */
router.get('/', ctrlTravel.travel);

module.exports = router;
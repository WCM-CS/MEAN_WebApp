const express = require('express');
const router = express.Router();

const ctrlContact = require('../controllers/contact');

/* Get Contact Page */
router.get('/', ctrlContact.contact);

module.exports = router;
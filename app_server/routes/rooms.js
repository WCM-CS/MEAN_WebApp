const express = require('express');
const router = express.Router();

const ctrlRooms = require('../controllers/rooms');

/* Get Rooms Page */
router.get('/', ctrlRooms.rooms);

module.exports = router;
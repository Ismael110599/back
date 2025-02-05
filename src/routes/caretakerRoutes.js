const { getAvailableCaretakers, getNearbyCaretakers } = require('../controllers/caretakerController');
const express = require('express');
const router = express.Router();

router.get('/available', getAvailableCaretakers);
router.get('/near', getNearbyCaretakers);
module.exports = router;
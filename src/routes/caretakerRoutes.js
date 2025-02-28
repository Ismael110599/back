const { getAvailableCaretakers, getNearbyCaretakers, postregisterCaretaker } = require('../controllers/caretakerController');
const express = require('express');
const router = express.Router();

router.get('/available', getAvailableCaretakers);
router.get('/near', getNearbyCaretakers);
router.post('/register', postregisterCaretaker)
module.exports = router;

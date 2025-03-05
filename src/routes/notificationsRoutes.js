const { notifySelectedCaretaker } = require('../controllers/notificationController');
const express = require('express');
// const verifyToken = require('../middleware/auth');
const router = express.Router();

router.post('/notify', notifySelectedCaretaker);

module.exports = router;

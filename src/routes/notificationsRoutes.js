const { sendEmailNotification } = require('../controllers/notificationController');
const express = require('express');

const router = express.Router();

router.post('/notify', sendEmailNotification);

module.exports = router;

const express = require('express');
const { createStay, getStaysByUser } = require('../controllers/stayController');
const { verifyToken } = require('../middleware/auth');

const router = express.Router();

router.post('/', verifyToken, createStay);
router.get('/', verifyToken, getStaysByUser);

module.exports = router;

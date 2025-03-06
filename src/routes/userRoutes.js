const express = require('express');
const { getProfile, updateProfile, getUsers } = require('../controllers/userController');
const { verifyToken } = require('../middleware/auth');

const router = express.Router();

router.get('/profile', verifyToken, getProfile);
router.put('/update', verifyToken, updateProfile); 
router.get('/list', getUsers);

module.exports = router;
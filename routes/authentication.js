const express = require('express');
const router = express.Router();
const { createAuthentication, getAllAuthentications, getAuthenticationById, updateAuthentication, deleteAuthentication } = require('../controllers/authenControllers');

router.post('/auth', createAuthentication);
router.post('/auth', getAllAuthentications);
router.post('/auth/:id', getAuthenticationById);
router.put('/auth/:id', updateAuthentication);
router.delete('auth/:id', deleteAuthentication);

module.exports = router;

const express = require('express');
const { getProfile, updateProfile, getUsers } = require('../controllers/userController'); // Importamos updateProfile
const { verifyToken } = require('../middleware/auth');

const router = express.Router();

router.get('/profile', verifyToken, getProfile);
router.post('/profile', verifyToken, updateProfile); // Ahora la función updateProfile está definida
router.get('/list', getUsers); // Ruta para obtener los usuarios
module.exports = router;

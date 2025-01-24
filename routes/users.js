const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.post('/users', userController.createUser);
router.post('/users', userController.getAllUsers);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);
router.post('/users/:id', userController.getUser);

module.exports=router;
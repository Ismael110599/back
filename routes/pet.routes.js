const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController')

router.post('/createpet', petController.createPet);
router.post('/pets', petController.getAllPets);
router.post('/updatePet/:id', petController.updatePet);
router.post('/deletePet/:id', petController.deletPet);
router.post('/getPets/:id', petController.getPet);

module.exports=router;
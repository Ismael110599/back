const express = require('express');
const {
    getAllPets,
    createPet,
    updatePet,
    deletePet
} = require('../controllers/petControllers');
const router = express.Router();
// Obtener todas las mascotas
router.get('/', getAllPets);
// Crear una nueva mascota
router.post('/', createPet);
// Actualizar una mascota existente
router.put('/:id', updatePet);
// Eliminar una mascota
router.delete('/:id', deletePet);

module.exports = router;

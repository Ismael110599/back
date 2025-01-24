const express = require('express');
const {
    getAllCarers,
    createCarer,
    updateCarer,
    deleteCarer
} = require('../controllers/carerControllers');
const router = express.Router();
// Obtener todos los cuidadores
router.get('/', getAllCarers);
// Crear un nuevo cuidador
router.post('/', createCarer);
// Actualizar un cuidador existente
router.put('/:idCarer', updateCarer);
// Eliminar un cuidador
router.delete('/:idCarer', deleteCarer);

module.exports = router;

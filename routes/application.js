const express = require('express');
const {
    getAllapplicationModelss,
    createapplicationModels,
    updateapplicationModels,
    deleteapplicationModels
} = require('../controllers/applicationControllers');
const router = express.Router();
// Obtener todas las aplicaciones
router.get('/', getAllapplicationModelss);
// Crear una nueva aplicación
router.post('/', createapplicationModels);
// Actualizar una aplicación existente
router.put('/:idApplication', updateapplicationModels);
// Eliminar una aplicación
router.delete('/:idApplication', deleteapplicationModels);

module.exports = router;

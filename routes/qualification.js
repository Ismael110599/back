const express = require('express');
const {
    getAllQualifications,
    createQualification,
    updateQualification,
    deleteQualification
} = require('../controllers/qualificationControllers');
const router = express.Router();
// Obtener todas las calificaciones
router.get('/', getAllQualifications);
// Crear una nueva calificación
router.post('/', createQualification);
// Actualizar una calificación existente
router.put('/:id', updateQualification);
// Eliminar una calificación
router.delete('/:id', deleteQualification);

module.exports = router;
    
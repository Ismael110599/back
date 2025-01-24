const express = require('express');
const {
    getAllApplications,
    createApplication,
    updateApplication,
    deleteApplication
} = require('../controllers/applicationController');
const router = express.Router();
// Obtener todas las aplicaciones
router.get('/', getAllApplications);
// Crear una nueva aplicación
router.post('/', createApplication);
// Actualizar una aplicación existente
router.put('/:idApplication', updateApplication);
// Eliminar una aplicación
router.delete('/:idApplication', deleteApplication);

module.exports = router;

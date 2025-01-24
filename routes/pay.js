const express = require('express');
const {
    getAllPays,
    createPay,
    updatePay,
    deletePay
} = require('../controllers/payController');
const router = express.Router();
// Obtener todos los pagos
router.get('/', getAllPays);
// Crear un nuevo pago
router.post('/', createPay);
// Actualizar un pago existente
router.put('/:id', updatePay);
// Eliminar un pago
router.delete('/:id', deletePay);

module.exports = router;

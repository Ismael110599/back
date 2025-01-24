const express = require('express');
const {
    getAllBills,
    createBill,
    updateBill,
    deleteBill
} = require('../controllers/billControllers');
const router = express.Router();
// Obtener todas las facturas
router.get('/', getAllBills);
// Crear una nueva factura
router.post('/', createBill);
// Actualizar una factura existente
router.put('/:idBill', updateBill);
// Eliminar una factura
router.delete('/:idBill', deleteBill);

module.exports = router;

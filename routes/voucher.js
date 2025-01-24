const express = require('express');
const {
    getAllVouchers,
    createVoucher,
    updateVoucher,
    deleteVoucher
} = require('../controllers/voucherControllers');
const router = express.Router();
// Obtener todos los vouchers
router.get('/', getAllVouchers);
// Crear un nuevo voucher
router.post('/', createVoucher);
// Actualizar un voucher existente
router.put('/:id', updateVoucher);
// Eliminar un voucher
router.delete('/:id', deleteVoucher);

module.exports = router;

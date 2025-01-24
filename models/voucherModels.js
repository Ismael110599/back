const mongoose = require('mongoose');

const voucherSchema = new mongoose.Schema({
    idvoucher: { type: Number, required: true },
    image: { type: Buffer, required: true }  // Usamos Buffer para almacenar datos binarios (como imágenes)
});

module.exports = mongoose.model('Voucher', voucherSchema);

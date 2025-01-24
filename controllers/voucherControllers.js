const Voucher = require('../models/voucherModels');

// Obtener todos los vouchers
const getAllVouchers = async (req, res) => {
    try {
        const vouchers = await Voucher.find();
        res.status(200).json(vouchers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear un nuevo voucher
const createVoucher = async (req, res) => {
    try {
        const { idvoucher, image } = req.body;  // Se asume que la imagen llega en formato binario
        const voucher = new Voucher({ idvoucher, image });
        await voucher.save();
        res.status(201).json(voucher);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Actualizar un voucher existente
const updateVoucher = async (req, res) => {
    try {
        const { id } = req.params;
        const { idvoucher, image } = req.body; // Se asume que la imagen llega en formato binario
        const voucher = await Voucher.findByIdAndUpdate(id, { idvoucher, image }, { new: true });
        if (!voucher) {
            return res.status(404).json({ error: 'Voucher not found' });
        }
        res.status(200).json(voucher);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar un voucher
const deleteVoucher = async (req, res) => {
    try {
        const { id } = req.params;
        const voucher = await Voucher.findByIdAndDelete(id);
        if (!voucher) {
            return res.status(404).json({ error: 'Voucher not found' });
        }
        res.status(200).json({ message: 'Voucher deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllVouchers,
    createVoucher,
    updateVoucher,
    deleteVoucher
};

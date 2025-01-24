const Pay = require('../models/payModels');

// Obtener todos los pagos
const getAllPays = async (req, res) => {
    try {
        const pays = await Pay.find();
        res.status(200).json(pays);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear un nuevo pago
const createPay = async (req, res) => {
    try {
        const { idpay, date, amount, method } = req.body;
        const pay = new Pay({ idpay, date, amount, method });
        await pay.save();
        res.status(201).json(pay);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Actualizar un pago existente
const updatePay = async (req, res) => {
    try {
        const { id } = req.params;
        const { idpay, date, amount, method } = req.body;
        const pay = await Pay.findByIdAndUpdate(id, { idpay, date, amount, method }, { new: true });
        if (!pay) {
            return res.status(404).json({ error: 'Pay not found' });
        }
        res.status(200).json(pay);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar un pago
const deletePay = async (req, res) => {
    try {
        const { id } = req.params;
        const pay = await Pay.findByIdAndDelete(id);
        if (!pay) {
            return res.status(404).json({ error: 'Pay not found' });
        }
        res.status(200).json({ message: 'Pay deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllPays,
    createPay,
    updatePay,
    deletePay
};

const Bill = require('../models/billModels');

// Obtener todas las facturas
const getAllBills = async (req, res) => {
    try {
        const bills = await Bill.find();
        res.status(200).json(bills);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear una nueva factura
const createBill = async (req, res) => {
    try {
        const { idBill, detalle, amount, total, email } = req.body;
        const bill = new Bill({ idBill, detalle, amount, total, email });
        await bill.save();
        res.status(201).json(bill);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Actualizar una factura existente
const updateBill = async (req, res) => {
    try {
        const { idBill } = req.params;
        const { detalle, amount, total, email } = req.body;
        const bill = await Bill.findOneAndUpdate(
            { idBill },
            { detalle, amount, total, email },
            { new: true }
        );
        if (!bill) {
            return res.status(404).json({ error: 'Bill not found' });
        }
        res.status(200).json(bill);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar una factura
const deleteBill = async (req, res) => {
    try {
        const { idBill } = req.params;
        const bill = await Bill.findOneAndDelete({ idBill });
        if (!bill) {
            return res.status(404).json({ error: 'Bill not found' });
        }
        res.status(200).json({ message: 'Bill deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllBills,
    createBill,
    updateBill,
    deleteBill
};

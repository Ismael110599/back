const pay = require('../models/payModel');

exports.createpay = async (req, res) => {
  try {
    const { payname } = req.body;

    // Verificar si el payname ya existe
    const existingPay = await Pay.findOne({ payname });
    if (existingPay) {
      return res.status(400).json({ error: 'The payname already exists, please try another one' });
    }

    const newPay = newPay(req.body);
    const pay = await newPay.save();
    res.status(201).json(pay);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtiene y devuelve todos los vouchers almacenados en la base de datos.
exports.getAllPays = async (req, res) => {
  try {
    const pays = await pay.find();
    res.status(200).json(pays);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtiene y devuelve 
exports.getPay = async (req, res) => {
  try {
    const pay = await pay.findById(req.params.id);
    if (!pay) return res.status(404).json({ error: 'pay not found' });
    res.status(200).json(pay);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Actualiza un registro
exports.updatePay = async (req, res) => {
  try {
    const pay = await pay.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!pay) return res.status(404).json({ error: 'pay not found' });
    res.status(200).json(pay);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Elimina un registro
exports.deletePay = async (req, res) => {
  try {
    const pay = await pay.findByIdAndDelete(req.params.id);
    if (!pay) return res.status(404).json({ error: 'pay not found' });
    res.status(200).json({ message: 'pay deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


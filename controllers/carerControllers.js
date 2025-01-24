const Carer = require('../models/carerModels');

// Obtener todos los cuidadores
const getAllCarers = async (req, res) => {
    try {
        const carers = await Carer.find();
        res.status(200).json(carers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear un nuevo cuidador
const createCarer = async (req, res) => {
    try {
        const { idCarer, latitude, longitude, place } = req.body;
        const carer = new Carer({ idCarer, latitude, longitude, place });
        await carer.save();
        res.status(201).json(carer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Actualizar un cuidador existente
const updateCarer = async (req, res) => {
    try {
        const { idCarer } = req.params;
        const { latitude, longitude, place } = req.body;
        const carer = await Carer.findOneAndUpdate(
            { idCarer },
            { latitude, longitude, place },
            { new: true }
        );
        if (!carer) {
            return res.status(404).json({ error: 'Carer not found' });
        }
        res.status(200).json(carer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar un cuidador
const deleteCarer = async (req, res) => {
    try {
        const { idCarer } = req.params;
        const carer = await Carer.findOneAndDelete({ idCarer });
        if (!carer) {
            return res.status(404).json({ error: 'Carer not found' });
        }
        res.status(200).json({ message: 'Carer deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllCarers,
    createCarer,
    updateCarer,
    deleteCarer
};

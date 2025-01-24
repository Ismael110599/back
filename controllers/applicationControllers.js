const applicationModels = require('../models/applicationModels');

// Obtener todas las aplicaciones
const getAllapplicationModelss = async (req, res) => {
    try {
        const applicationModelss = await applicationModels.find();
        res.status(200).json(applicationModelss);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear una nueva aplicación
const createapplicationModels = async (req, res) => {
    try {
        const { idapplicationModels, startDate, endDate, reason } = req.body;
        const applicationModels = new applicationModels({ idapplicationModels, startDate, endDate, reason });
        await applicationModels.save();
        res.status(201).json(applicationModels);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Actualizar una aplicación existente
const updateapplicationModels = async (req, res) => {
    try {
        const { idapplicationModels } = req.params;
        const { startDate, endDate, reason } = req.body;
        const applicationModels = await applicationModels.findOneAndUpdate(
            { idapplicationModels },
            { startDate, endDate, reason },
            { new: true }
        );
        if (!applicationModels) {
            return res.status(404).json({ error: 'applicationModels not found' });
        }
        res.status(200).json(applicationModels);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar una aplicación
const deleteapplicationModels = async (req, res) => {
    try {
        const { idapplicationModels } = req.params;
        const applicationModels = await applicationModels.findOneAndDelete({ idapplicationModels });
        if (!applicationModels) {
            return res.status(404).json({ error: 'applicationModels not found' });
        }
        res.status(200).json({ message: 'applicationModels deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllapplicationModelss,
    createapplicationModels,
    updateapplicationModels,
    deleteapplicationModels
};

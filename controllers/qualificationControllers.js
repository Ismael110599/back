const Qualification = require('../models/qualificationModels');

// Obtener todas las calificaciones
const getAllQualifications = async (req, res) => {
    try {
        const qualifications = await Qualification.find();
        res.status(200).json(qualifications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear una nueva calificación
const createQualification = async (req, res) => {
    try {
        const { idqualification, name } = req.body;
        const qualification = new Qualification({ idqualification, name });
        await qualification.save();
        res.status(201).json(qualification);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Actualizar una calificación existente
const updateQualification = async (req, res) => {
    try {
        const { id } = req.params;
        const { idqualification, name } = req.body;
        const qualification = await Qualification.findByIdAndUpdate(id, { idqualification, name }, { new: true });
        if (!qualification) {
            return res.status(404).json({ error: 'Qualification not found' });
        }
        res.status(200).json(qualification);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar una calificación
const deleteQualification = async (req, res) => {
    try {
        const { id } = req.params;
        const qualification = await Qualification.findByIdAndDelete(id);
        if (!qualification) {
            return res.status(404).json({ error: 'Qualification not found' });
        }
        res.status(200).json({ message: 'Qualification deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllQualifications,
    createQualification,
    updateQualification,
    deleteQualification
};

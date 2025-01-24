const Application = require('../models/Application');

// Obtener todas las aplicaciones
const getAllApplications = async (req, res) => {
    try {
        const applications = await Application.find();
        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear una nueva aplicación
const createApplication = async (req, res) => {
    try {
        const { idApplication, startDate, endDate, reason } = req.body;
        const application = new Application({ idApplication, startDate, endDate, reason });
        await application.save();
        res.status(201).json(application);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Actualizar una aplicación existente
const updateApplication = async (req, res) => {
    try {
        const { idApplication } = req.params;
        const { startDate, endDate, reason } = req.body;
        const application = await Application.findOneAndUpdate(
            { idApplication },
            { startDate, endDate, reason },
            { new: true }
        );
        if (!application) {
            return res.status(404).json({ error: 'Application not found' });
        }
        res.status(200).json(application);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar una aplicación
const deleteApplication = async (req, res) => {
    try {
        const { idApplication } = req.params;
        const application = await Application.findOneAndDelete({ idApplication });
        if (!application) {
            return res.status(404).json({ error: 'Application not found' });
        }
        res.status(200).json({ message: 'Application deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllApplications,
    createApplication,
    updateApplication,
    deleteApplication
};

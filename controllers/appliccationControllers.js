const application = require('../models/applicationModel');

exports.createapplication = async (req, res) => {
  try {
    const { applicationname } = req.body;

    // Verificar si el applicationname ya existe
    const existingApplication = await Application.findOne({ applicationname });
    if (existingApplication) {
      return res.status(400).json({ error: 'The applicationname already exists, please try another one' });
    }

    const newApplication = newApplication(req.body);
    const application = await newApplication.save();
    res.status(201).json(application);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtiene y devuelve todos los vouchers almacenados en la base de datos.
exports.getAllApplications = async (req, res) => {
  try {
    const applications = await application.find();
    res.status(200).json(applications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtiene y devuelve 
exports.getApplication = async (req, res) => {
  try {
    const application = await application.findById(req.params.id);
    if (!application) return res.status(404).json({ error: 'application not found' });
    res.status(200).json(application);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Actualiza un registro
exports.updateApplication = async (req, res) => {
  try {
    const application = await application.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!application) return res.status(404).json({ error: 'application not found' });
    res.status(200).json(application);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Elimina un registro
exports.deleteApplication = async (req, res) => {
  try {
    const application = await application.findByIdAndDelete(req.params.id);
    if (!application) return res.status(404).json({ error: 'application not found' });
    res.status(200).json({ message: 'application deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


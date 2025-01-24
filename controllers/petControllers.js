const Pet = require('../models/petModels');

// Obtener todas las mascotas
const getAllPets = async (req, res) => {
    try {
        const pets = await Pet.find();
        res.status(200).json(pets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear una nueva mascota
const createPet = async (req, res) => {
    try {
        const { idpet, name, race, age, descripcion, species } = req.body;
        const pet = new Pet({ idpet, name, race, age, descripcion, species });
        await pet.save();
        res.status(201).json(pet);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Actualizar una mascota existente
const updatePet = async (req, res) => {
    try {
        const { id } = req.params;
        const { idpet, name, race, age, descripcion, species } = req.body;
        const pet = await Pet.findByIdAndUpdate(id, { idpet, name, race, age, descripcion, species }, { new: true });
        if (!pet) {
            return res.status(404).json({ error: 'Pet not found' });
        }
        res.status(200).json(pet);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar una mascota
const deletePet = async (req, res) => {
    try {
        const { id } = req.params;
        const pet = await Pet.findByIdAndDelete(id);
        if (!pet) {
            return res.status(404).json({ error: 'Pet not found' });
        }
        res.status(200).json({ message: 'Pet deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllPets,
    createPet,
    updatePet,
    deletePet
};

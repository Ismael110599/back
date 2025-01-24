const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    idpet: { type: Number, required: true },
    name: { type: String, required: true },
    race: { type: String, required: true },
    age: { type: Number, required: true },
    descripcion: { type: String, required: true },
    species: { type: String, required: true }
});

module.exports = mongoose.model('Pet', petSchema);

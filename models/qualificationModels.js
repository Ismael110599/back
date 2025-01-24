const mongoose = require('mongoose');

const qualificationSchema = new mongoose.Schema({
    idqualification: { type: Number, required: true },
    name: {
        type: String,
        enum: ['cuidador', 'admin', 'cliente'],
        required: true
    }
});

module.exports = mongoose.model('Qualification', qualificationSchema);

const mongoose = require('mongoose');

const CaretakerSchema = new mongoose.Schema({
    name: String,
    email: String,
    location: {
        type: { type: String, default: 'Point' },
        coordinates: { type: [Number], required: true } // [longitud, latitud]
    },
    description: { type: String, default:""},
    availability: [{ startDate: Date, endDate: Date }],
    rating: { type: Number, default: 0 },
    reviewCount: { type: Number, default: 0 }
});
CaretakerSchema.index({ location: '2dsphere' });
module.exports = mongoose.model('Caretaker', CaretakerSchema);
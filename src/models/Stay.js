const mongoose = require('mongoose');

const StaySchema = new mongoose.Schema({
    petOwner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    caretaker: { type: mongoose.Schema.Types.ObjectId, ref: 'Caretaker', required: true },
    pet: { name: String, type: String, age: Number },
    startDate: Date,
    endDate: Date,
    status: { type: String, enum: ['pending', 'accepted', 'completed'], default: 'pending' },
}, { timestamps: true });

module.exports = mongoose.model('Stay', StaySchema);

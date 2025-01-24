const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carerSchema = new mongoose.Schema({
  idCarer: { type: Number, required: true, unique: true },
  latitude: { type: Number, required: true },
  longitude: { type: mongoose.Types.Decimal128, required: true },
  place: { type: mongoose.Types.Decimal128, required: true }
});

const Carer = mongoose.model('Carer', carerSchema);
module.exports = Carer;

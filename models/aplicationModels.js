const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applicationSchema = new mongoose.Schema({
  idApplication: { type: Number, required: true, unique: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  reason: { type: String, required: true }
});

const Exchange = mongoose.model('Exchange', exchangeSchema);
module.exports = Exchange;

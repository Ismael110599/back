const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const billSchema = new mongoose.Schema({
  idBill: { type: Number, required: true, unique: true },
  detalle: { type: String, required: true },
  amount: { type: mongoose.Types.Decimal128, required: true },
  total: { type: mongoose.Types.Decimal128, required: true },
  email: { type: String, required: true, maxlength: 45 }
});

const Bill = mongoose.model('Bill', billSchema);
module.exports = Bill;
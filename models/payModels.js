const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paySchema = new mongoose.Schema({
  idpay: { type: Number, required: true },
  date: { type: Date, required: true },
  amount: { type: mongoose.Schema.Types.Decimal128, required: true },
  method: {
      type: String,
      enum: ['transferencia', 'transaccion', 'fisico'],
      required: true
  }
});

// const Recommendation = mongoose.model('Recommendation', recommendationSchema);
module.exports = paySchema;
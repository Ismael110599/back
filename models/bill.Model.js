const mongoose = require('mongoose');
const { DECIMAL } = require('mysql/lib/protocol/constants/types');
const Schema = mongoose.Schema;

const billSchema = new Schema({

  detall: { type: Text, required: true },
  amount: { type: DECIMAL, required: true },
  total: { type: DECIMAL, required: true },
  email: { type: String, required: true },

});

const Bill = mongoose.model('bill', billSchema);
module.exports = Bill;

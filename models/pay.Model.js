const mongoose = require('mongoose');
const { ENUM, DECIMAL, DATE } = require('mysql/lib/protocol/constants/types');
const Schema = mongoose.Schema;

const paySchema = new Schema({
    
  date: { type: DATE, required: true },
  amount: { type: DECIMAL, required: true },
  method: { type: ENUM, required: true },

});

const pay = mongoose.model('pay', paySchema);
module.exports = pay;

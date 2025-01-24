const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const voucherSchema = new Schema({
  
    image: { type: Picture, required: true },

});

const Voucher = mongoose.model('voucher', voucherSchema);
module.exports = Voucher;

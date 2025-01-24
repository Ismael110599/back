const mongoose = require('mongoose');
const { DECIMAL } = require('mysql/lib/protocol/constants/types');
const Schema = mongoose.Schema;

const carerSchema = new Schema({

  latitude: { type: INT, required: true },
  longitude: { type: DECIMAL, required: true },
  place: { type: DECIMAL, required: true },

});

const Carer = mongoose.model('carer', carerSchema);
module.exports = Carer;

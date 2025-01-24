const mongoose = require('mongoose');
const { DATE } = require('mysql/lib/protocol/constants/types');
const Schema = mongoose.Schema;

const applicationSchema = new Schema({

  dateStart: { type: DATE, required: true },
  dateEnd: { type: DATE, required: true },
  reason: { type: Text, required: true },

});

const Application = mongoose.model('application', applicationSchema);
module.exports = Application;

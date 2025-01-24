const mongoose = require('mongoose');
const { ENUM } = require('mysql/lib/protocol/constants/types');
const Schema = mongoose.Schema;

const qualificationSchema = new Schema({

    name: { type: ENUM, required: true },

});

const Qualification = mongoose.model('qualification', qualificationSchema);
module.exports = Qualification;

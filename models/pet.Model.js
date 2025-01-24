const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = new Schema({

  name: { type: String, required: true, unique: true },
  race: { type: String, required: true },
  age: { type: Number, required: true },
  description: { type: String, required: true },
  species: { type: String, required: true },

});

const Pet = mongoose.model('pet', petSchema);
module.exports = Pet;

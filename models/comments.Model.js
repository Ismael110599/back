const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentsSchema = new Schema({

  description: { type: Text, required: true },

});

const Comments = mongoose.model('comments', commentsSchema);
module.exports = Comments;

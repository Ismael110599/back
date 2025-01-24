const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new mongoose.Schema({
  descripcion: { type: String, required: true }
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;

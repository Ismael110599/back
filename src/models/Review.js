const ReviewSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    caretaker: { type: mongoose.Schema.Types.ObjectId, ref: 'Caretaker', required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: String
});
module.exports = mongoose.model('Review', ReviewSchema);
const Review = require('../models/Review');
const Caretaker = require('../models/Caretaker');

exports.addReview = async (req, res) => {
    const { user, caretaker, rating, comment } = req.body;
    try {
        const review = new Review({ user, caretaker, rating, comment });
        await review.save();
        
        const reviews = await Review.find({ caretaker });
        const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
        await Caretaker.findByIdAndUpdate(caretaker, { rating: avgRating, reviewCount: reviews.length });
        
        res.json({ message: 'Reseña agregada exitosamente' });
    } catch (err) {
        res.status(500).json({ error: 'Error al agregar la reseña' });
    }
};
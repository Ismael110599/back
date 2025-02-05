const Caretaker = require('../models/Caretaker');
const { sendResponse, COD_OK, COD_ERR } = require('../utils/response');

exports.getCaretakers = async (req, res) => {
    try {
        const caretakers = await Caretaker.find();
        return sendResponse(res, COD_OK, 200, "Lista de cuidadores obtenida", caretakers);
    } catch (error) {
        return sendResponse(res, COD_ERR, 500, "Error al obtener la lista de cuidadores");
    }
};


exports.getAvailableCaretakers = async (req, res) => {
    const { start, end } = req.query;
    try {
        const availableCaretakers = await Caretaker.find({
            availability: { $elemMatch: { startDate: { $lte: new Date(start) }, endDate: { $gte: new Date(end) } } }
        });
        res.json(availableCaretakers);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener cuidadores disponibles' });
    }
};

exports.getNearbyCaretakers = async (req, res) => {
    const { lat, lng, radius } = req.query;
    try {
        const caretakers = await Caretaker.find({
            location: {
                $near: {
                    $geometry: { type: 'Point', coordinates: [parseFloat(lng), parseFloat(lat)] },
                    $maxDistance: parseFloat(radius) * 1000
                }
            }
        });
        res.json(caretakers);
    } catch (err) {
        res.status(500).json({ error: 'Error al buscar cuidadores cercanos' });
    }
};

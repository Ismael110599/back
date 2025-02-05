const Stay = require('../models/Stay');
const { sendResponse, COD_OK, COD_ERR } = require('../utils/response');

exports.createStay = async (req, res) => {
    try {
        const { pet, caretaker, startDate, endDate } = req.body;
        const stay = new Stay({ user: req.user.id, pet, caretaker, startDate, endDate });
        await stay.save();

        return sendResponse(res, COD_OK, 201, "Estancia creada exitosamente", stay);
    } catch (error) {
        return sendResponse(res, COD_ERR, 500, "Error al crear la estancia");
    }
};

exports.getStaysByUser = async (req, res) => {
    try {
        const stays = await Stay.find({ user: req.user.id });
        return sendResponse(res, COD_OK, 200, "Estancias obtenidas", stays);
    } catch (error) {
        return sendResponse(res, COD_ERR, 500, "Error al obtener las estancias");
    }
};

const User = require('../models/User');
const { sendResponse, COD_OK, COD_ERR } = require('../utils/response');

exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) return sendResponse(res, COD_ERR, 404, "Usuario no encontrado");

        return sendResponse(res, COD_OK, 200, "Perfil obtenido correctamente", user);
    } catch (error) {
        return sendResponse(res, COD_ERR, 500, "Error al obtener el perfil");
    }
};

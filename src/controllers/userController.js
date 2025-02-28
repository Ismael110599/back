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

// Método para actualizar el perfil del usuario
exports.updateProfile = async (req, res) => {
    try {
        const { name, phone, address, pets } = req.body; // Campos que el usuario puede actualizar
        
        // Verificar si el usuario existe
        const user = await User.findById(req.user.id);
        if (!user) return sendResponse(res, COD_ERR, 404, "Usuario no encontrado");

        // Actualizar los campos del perfil
        user.name = name || user.name;
        user.phone = phone || user.phone;
        user.address = address || user.address;
        if (pets) user.pets = pets; // Actualizar la lista de mascotas

        // Guardar los cambios
        await user.save();

        return sendResponse(res, COD_OK, 200, "Perfil actualizado correctamente", user);
    } catch (error) {
        return sendResponse(res, COD_ERR, 500, "Error al actualizar el perfil");
    }
};


exports.getUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password'); // Excluir el campo password por seguridad
        return sendResponse(res, COD_OK, 200, "Lista de usuarios obtenida", users);
    } catch (error) {
        return sendResponse(res, COD_ERR, 500, "Error al obtener la lista de usuarios");
    }
};
const jwt = require('jsonwebtoken');
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
        const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

        if (!token) {
            return sendResponse(res, COD_ERR, 401, "Token de autenticación no proporcionado");
        }

        // Verificar y decodificar el token
        jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
            if (err) {
                return sendResponse(res, COD_ERR, 401, "Token inválido o expirado");
            }

            // Obtener el usuario usando el ID del token decodificado
            const user = await User.findById(decoded.id);
            if (!user) return sendResponse(res, COD_ERR, 404, "Usuario no encontrado");

            const { name, phone, address, pets, removePet } = req.body;

            // Actualizar los campos del perfil
            user.name = name || user.name;
            user.phone = phone || user.phone;
            user.address = address || user.address;

            // Si 'removePet' está presente, eliminar la mascota correspondiente
            if (removePet) {
                user.pets = user.pets.filter(pet => pet.name !== removePet);
            }

            // Si 'pets' está presente, actualizar la lista de mascotas
            if (pets) user.pets = pets;

            // Guardar los cambios
            await user.save();

            return sendResponse(res, COD_OK, 200, "Perfil actualizado correctamente", user);
        });
    } catch (error) {
        console.error(error); // Para ver los detalles del error
        return sendResponse(res, COD_ERR, 500, "Error al actualizar el perfil", error.message);
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
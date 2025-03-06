const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { sendResponse, COD_OK, COD_ERR } = require('../utils/response');
const upload = require('../middleware/upload');
const cloudinary = require('../config/cloudinary');

exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) return sendResponse(res, COD_ERR, 404, "Usuario no encontrado");

        return sendResponse(res, COD_OK, 200, "Perfil obtenido correctamente", user);
    } catch (error) {
        return sendResponse(res, COD_ERR, 500, "Error al obtener el perfil");
    }
};

exports.updateProfile = async (req, res) => {
    try {
        const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
        if (!token) {
            return sendResponse(res, COD_ERR, 401, "Token de autenticación no proporcionado");
        }

        jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
            if (err) {
                return sendResponse(res, COD_ERR, 401, "Token inválido o expirado");
            }

            const user = await User.findById(decoded.id);
            if (!user) return sendResponse(res, COD_ERR, 404, "Usuario no encontrado");

            upload.single('profilePicture')(req, res, async (uploadErr) => {
                if (uploadErr) {
                    if (uploadErr.code === 'LIMIT_FILE_SIZE') {
                        return sendResponse(res, COD_ERR, 400, "La imagen excede el límite de 5MB");
                    }
                    return sendResponse(res, COD_ERR, 400, uploadErr.message || "Error al subir la imagen");
                }

                const { name, phone, address, pets, removePet } = req.body;

                user.name = name || user.name;
                user.phone = phone || user.phone;
                user.address = address || user.address;

                if (removePet) {
                    user.pets = user.pets.filter(pet => pet.name !== removePet);
                }

                if (pets) {
                    try {
                        user.pets = JSON.parse(pets);
                    } catch (e) {
                        user.pets = pets;
                    }
                }

                if (req.file) {
                    try {
                        // Subir la imagen a Cloudinary y esperar el resultado
                        const result = await new Promise((resolve, reject) => {
                            const stream = cloudinary.uploader.upload_stream(
                                { folder: 'uploads' },
                                (error, result) => {
                                    if (error) reject(error);
                                    else resolve(result);
                                }
                            );
                            stream.end(req.file.buffer);
                        });

                        console.log('URL de Cloudinary:', result.secure_url); // Depuración
                        user.profilePicture = result.secure_url;
                    } catch (uploadError) {
                        console.error('Error subiendo a Cloudinary:', uploadError);
                        return sendResponse(res, COD_ERR, 500, "Error al subir la imagen a Cloudinary");
                    }
                }

                // Depuración antes de guardar
                console.log('Usuario antes de guardar:', user);

                await user.save();

                // Depuración después de guardar
                const updatedUser = await User.findById(user._id).select('-password');
                console.log('Usuario después de guardar:', updatedUser);

                return sendResponse(res, COD_OK, 200, "Perfil actualizado correctamente", updatedUser);
            });
        });
    } catch (error) {
        console.error(error);
        return sendResponse(res, COD_ERR, 500, "Error al actualizar el perfil", error.message);
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        return sendResponse(res, COD_OK, 200, "Lista de usuarios obtenida", users);
    } catch (error) {
        return sendResponse(res, COD_ERR, 500, "Error al obtener la lista de usuarios");
    }
};
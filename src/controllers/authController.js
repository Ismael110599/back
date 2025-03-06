    const User = require('../models/User');
    const bcrypt = require('bcryptjs');
    const jwt = require('jsonwebtoken');
    const { validationResult } = require('express-validator');
    const { sendResponse, COD_OK, COD_ERR } = require('../utils/response');

    exports.register = async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return sendResponse(res, COD_ERR, 400, "Errores de validación", errors.array());

        const { name, email, password, phone, address, pets, role } = req.body;

        try {
            let user = await User.findOne({ email });
            if (user) return sendResponse(res, COD_ERR, 400, "El correo ya está registrado");

            user = new User({ name, email, password, phone, address, pets, role });
            await user.save();

            const token = jwt.sign(
                { id: user._id, role: user.role }, 
                process.env.JWT_SECRET, 
                { expiresIn: '7d' }
            );
            return sendResponse(res, COD_OK, 201, "Usuario registrado exitosamente", { token, user: { id: user._id, name, email } });

        } catch (error) {
            return sendResponse(res, COD_ERR, 500, "Error en el servidor");
        }
    };

    exports.login = async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return sendResponse(res, COD_ERR, 400, "Errores de validación", errors.array());

        const { email, password } = req.body;

        try {
            const user = await User.findOne({ email });
            if (!user) return sendResponse(res, COD_ERR, 400, "Usuario no encontrado");

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return sendResponse(res, COD_ERR, 400, "Credenciales incorrectas");

            const token = jwt.sign(
                { id: user._id, role: user.role }, 
                process.env.JWT_SECRET, 
                { expiresIn: '7d' }
            );
            return sendResponse(res, COD_OK, 200, "Inicio de sesión exitoso", { 
                token, 
                user: { id: user._id, name: user.name, email: user.email, phone: user.phone, address: user.address, role: user.role, pets: user.pets }
            });

        } catch (error) {
            return sendResponse(res, COD_ERR, 500, "Error en el servidor");
        }
    };
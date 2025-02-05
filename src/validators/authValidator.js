const { check } = require('express-validator');

exports.validateRegister = [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email no es válido').isEmail(),
    check('password', 'La contraseña debe tener al menos 6 caracteres').isLength({ min: 6 }),
];

exports.validateLogin = [
    check('email', 'El email no es válido').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
];

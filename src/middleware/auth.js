const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Acceso denegado. No hay token.' });

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) return res.status(403).json({ message: 'Token inválido' });
        req.user = decoded;
        next();
    });
};

const isAdmin = (req, res, next) => {
    if (req.user.role === 'admin') return next();
    return res.status(403).json({ message: 'Acceso denegado. Solo administradores pueden realizar esta acción.' });
};

module.exports = { verifyToken, isAdmin };
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
});

exports.sendEmailNotification = async (req, res) => {
    const { email, message } = req.body;
    try {
        await transporter.sendMail({ from: process.env.EMAIL_USER, to: email, subject: 'Notificación de Reserva', text: message });
        res.json({ message: 'Notificación enviada' });
    } catch (err) {
        res.status(500).json({ error: 'Error al enviar la notificación' });
    }
};
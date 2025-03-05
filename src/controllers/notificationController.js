require('dotenv').config();
const nodemailer = require('nodemailer');
const User = require('../models/User');

// Verificar variables de entorno
if (!process.env.EMAIL_USER || !process.env.MAILERPASS) {
    console.error("❌ ERROR: EMAIL_USER o MAILERPASS no están definidos.");
    process.exit(1);
}

// Configurar transporte SMTP
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.MAILERPASS,
    },
    tls: {
        rejectUnauthorized: false,
    },
});

// Verificar conexión SMTP
transporter.verify((error, success) => {
    if (error) {
        console.error('❌ Error al conectar con SMTP:', error);
    } else {
        console.log('✅ Conexión SMTP exitosa.');
    }
});

/**
 * 📩 Notificar al cuidador seleccionado sobre la solicitud de cuidado de mascotas.
 */
exports.notifySelectedCaretaker = async (req, res) => {
    try {
        const { caretakerName, startDate, endDate, petDetails, ownerName, ownerAddress, ownerPhone } = req.body;
        
        if (!caretakerName || !startDate || !endDate || !petDetails || !ownerName || !ownerAddress || !ownerPhone) {
            return res.status(400).json({ error: "Faltan datos: caretakerName, startDate, endDate, petDetails, ownerName, ownerAddress y ownerPhone son obligatorios." });
        }

        // Buscar el cuidador por nombre
        const caretaker = await User.findOne({ name: caretakerName });
        if (!caretaker) {
            return res.status(404).json({ error: "Cuidador no encontrado." });
        }

        console.log(`📢 Notificando al cuidador seleccionado: ${caretaker.name} (${caretaker.email})`);

        // Crear mensaje
        const message = `
            Hola ${caretaker.name},

            El usuario ${ownerName} ha seleccionado tus servicios para el cuidado de su mascota.

            📍 Dirección del dueño: ${ownerAddress}
            📞 Contacto: ${ownerPhone}

            🐾 Detalles de la mascota:
            ${petDetails}

            📅 Fechas de servicio: ${startDate} - ${endDate}

            Por favor, responde a este correo para confirmar.

            ¡Gracias!
            Equipo de PetCare
        `;

        // Enviar correo
        await transporter.sendMail({
            from: `"PetCare Notificaciones" <${process.env.EMAIL_USER}>`,
            to: caretaker.email,
            subject: 'Has sido seleccionado para cuidar una mascota',
            text: message,
        });

        console.log(`📨 Notificación enviada a: ${caretaker.email}`);
        res.json({ message: `Notificación enviada a ${caretaker.name}.` });

    } catch (err) {
        console.error('❌ Error al enviar la notificación:', err);
        res.status(500).json({ error: 'Error al enviar la notificación', details: err.message });
    }
};
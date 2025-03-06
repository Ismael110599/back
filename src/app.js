require('dotenv').config();

const express = require('express');
const { requestLogger } = require('./middleware/logger');
const connectDB = require('./config/db');
const morgan = require('morgan');
const cors  = require('cors');



const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const caretakerRoutes = require('./routes/caretakerRoutes')
const stayRoutes = require('./routes/stayRoutes');
const notificationRoutes = require('./routes/notificationsRoutes')
const {verifyToken} = require('./middleware/auth');





connectDB();

const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(express.json());
app.use(requestLogger);


app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));


app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/caretakers', caretakerRoutes);
app.use('/stays', stayRoutes);
app.use('/notifications', notificationRoutes);

module.exports = app;

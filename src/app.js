const express = require('express');
const cors = require('cors');
const { requestLogger } = require('./middleware/logger');
const connectDB = require('./config/db');

const cors = require('cors');
const morgan = require('morgan');

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const caretakerRoutes = require('./routes/caretakerRoutes')
const stayRoutes = require('./routes/stayRoutes');

require('dotenv').config();

connectDB();

const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))


app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));



app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/caretakers', caretakerRoutes);
app.use('/stays', stayRoutes);

module.exports = app;

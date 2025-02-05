const express = require('express');
const cors = require('cors');
const { requestLogger } = require('./middleware/logger');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const caretakerRoutes = require('./routes/caretakerRoutes')
const stayRoutes = require('./routes/stayRoutes');

require('dotenv').config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/caretakers', caretakerRoutes);
app.use('/stays', stayRoutes);

module.exports = app;

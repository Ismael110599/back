const mongoose = require('mongoose');

const connectDB = async () => {
    if (mongoose.connection.readyState !== 0) {
        console.log('Ya existe una conexión activa a MongoDB.');
        return;
    }

    console.log('Conectando a MongoDB...');

    try {

        await mongoose.connect(`mongodb+srv://admin:${process.env.MONGO_PWD}@cluster0.di8sg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'petcat', 
        });


        console.log('MongoDB Connected');

    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
connectDB();

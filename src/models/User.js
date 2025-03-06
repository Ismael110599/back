const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    phone: String,
    address: String,
    profilePicture: { type: String, default: '' }, 
    pets: [
        {
            name: { type: String, required: true },
            type: { type: String, required: true },
            age: { type: Number, required: true }
        }
    ],
    role: {
        type: String,
        enum: ['admin', 'user', 'caregiver'],
        default: 'user'
    }
}, { timestamps: true });

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

module.exports = mongoose.model('User', UserSchema);
const mongoose = require('mongoose')
const { Schema } = mongoose


const authSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    confirmPassword: String,
});

const AuthMessage = mongoose.model('auths', authSchema);

module.exports = AuthMessage;


const mongoose = require('mongoose');

// User Schema
const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// export schema
module.exports = mongoose.model('User', UserSchema);

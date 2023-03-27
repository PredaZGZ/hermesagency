const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String,
    accounts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account"
    }],
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', UserSchema);
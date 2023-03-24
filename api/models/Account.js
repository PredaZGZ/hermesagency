const mongoose = require('mongoose');

const AccountSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    value: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    accountid: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Account = mongoose.model('Account', AccountSchema);

module.exports = Account;
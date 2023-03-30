const mongoose = require('mongoose');

const AccountSchema = mongoose.Schema({
    name: String,
    accountid: String,
    password: String,
    initialbalance: Number,
    lastbalance: Number,
    lastweek: Number,
    lastmonth: Number,
    phase: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    balances: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Balance"
    }],
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Account', AccountSchema);
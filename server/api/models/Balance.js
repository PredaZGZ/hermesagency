const mongoose = require('mongoose');

const BalanceSchema = mongoose.Schema({
    balance: Number,
    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account"
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Balance', BalanceSchema);
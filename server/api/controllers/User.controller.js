//const Account = require('../models/Account');
const User = require('../models/User');

const UserController = {
    getAllAccounts: async (req,res) => {
        const found = await User.find({ name: req.params.user }).populate("Accounts");
        res.json(found)
    }
}

module.exports = UserController
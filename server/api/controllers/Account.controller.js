const Account = require('../models/Account');
const User = require('../models/User');

module.exports = {
    create: async (req, res) => {
      const { accountid, name, userid, initialbalance, phase } = req.body;
      try {
        const user = await User.findById(userid);
        if (!user) {
          return res.status(404).json({ error: "User not found" });
        }
        const newAccount = new Account({ user, accountid, name, initialbalance, phase });
        const savedAccount = await newAccount.save();
        user.accounts.push(savedAccount);
        await user.save();
        return res.status(201).json({ account: savedAccount });
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    },
  
    update: async (req, res) => {
      const { id } = req.params;
      const { name } = req.body;
      try {
        const account = await Account.findByIdAndUpdate(
          id,
          { name },
          { new: true }
        );
        if (!account) {
          return res.status(404).json({ error: "Account not found" });
        }
        return res.status(200).json({ account });
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    },
  
    delete: async (req, res) => {
      const { id } = req.params;
      try {
        const account = await Account.findByIdAndDelete(id);
        if (!account) {
          return res.status(404).json({ error: "Account not found" });
        }
        const user = await User.findById(account.user);
        user.accounts.pull(account);
        await user.save();
        return res.status(200).json({ message: "Account deleted" });
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    },
  
    listbyuser: async (req, res) => {
      const { userid } = req.params;
      try {
        const user = await User.findById(userid).populate("accounts");
        if (!user) {
          return res.status(404).json({ error: "User not found" });
        }
        return res.status(200).json({ accounts: user.accounts });
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    },
  
    listall: async (req, res) => {
      try {
        const accounts = await Account.find();
        if (accounts.length === 0) {
          return res.status(404).json({ error: "No accounts found" });
        }
        return res.status(200).json({ accounts });
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    },
  };
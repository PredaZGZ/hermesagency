
const { default: axios } = require('axios');
const Account = require('./models/Account');
const Balance = require('./models/Balance');

async function GetDataHourly() {
    const url = "https://mt-client-api-v1.london.agiliumtrade.ai"
    try {
        const accounts = await Account.find();
        accounts.map(async (acc) => {
            
            const {user} = await acc.populate('user')
            axios.get(url + '/users/current/accounts/' + acc.accountid + '/account-information', {
                headers: {
                    "auth-token": user.tokenAPI
                }
            }).then(async function (res) {
                const newBalance = new Balance({ balance: res.data.balance });
                const savedBalance = await newBalance.save();
                acc.balances.push(savedBalance)

                const newacc = await Account.findByIdAndUpdate(
                    acc._id,
                    { 
                        lastbalance: res.data.balance,
                        balances: acc.balances
                    },
                    { new: true }
                );

                console.log(newacc)

            }).catch(function (error) {
                console.log(error);
            })

        })
    } catch (err) {
        console.error(err);
    }
}

GetDataHourly();

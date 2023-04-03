const axios = require('axios');
const Account = require('./models/Account');
const Balance = require('./models/Balance');
const moment = require('moment');

async function GetDataHourly() {
    console.log("Getting Data!")
    const url = "https://mt-client-api-v1.london.agiliumtrade.ai"
    try {
        const accounts = await Account.find();
        for (const acc of accounts) {
            const { user } = await acc.populate('user')
            const { balances } = await acc.populate('balances')
            try {

                const res = await axios.get(url + '/users/current/accounts/' + acc.accountid + '/account-information', {
                    headers: {
                        "auth-token": user.tokenAPI
                    }
                });

                //Nuevo Balance                
                const lastBalance = balances.sort((a, b) => new Date(b.date) - new Date(a.date))[0];
                if (lastBalance && lastBalance.balance === res.data.balance) {
                    console.log("El balance es el mismo que el último registrado. No se guardará en la base de datos.")
                } else {
                    const newBalance = new Balance({ balance: res.data.balance, accountId: acc._id });
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
                }

                //Estadísticas:

                const startOfWeek = moment().startOf('week');
                const endOfWeek = moment().endOf('week');

                const balancesThisWeek = balances.filter(balance => {
                    const date = moment(balance.date);
                    return date >= startOfWeek && date <= endOfWeek;
                });

                const percentageChangesThisWeek = [];

                for (let i = 1; i < balancesThisWeek.length; i++) {
                    const prevBalance = balancesThisWeek[i - 1].balance;
                    const currBalance = balancesThisWeek[i].balance;
                    const percentageChange = ((currBalance / prevBalance) - 1) * 100;
                    percentageChangesThisWeek.push(percentageChange);
                }



                let averagePercentageChangeThisWeek = 0;

                if (percentageChangesThisWeek.length > 0) {
                    averagePercentageChangeThisWeek = percentageChangesThisWeek.reduce((sum, change) => sum + change, 0) / percentageChangesThisWeek.length;
                }


                const stats = {
                    thisWeek: averagePercentageChangeThisWeek,
                    thisMonth: averagePercentageChangeThisMonth,
                    lastWeek: averagePercentageChangeLastWeek,
                    lastMonth: averagePercentageChangeLastMonth,
                };





            } catch (error) {
                console.log(error);
            }
        }
    } catch (err) {
        console.error(err);
    }
}

module.exports = GetDataHourly;

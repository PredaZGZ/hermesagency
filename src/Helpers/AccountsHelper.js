

export default function AccountsHelper(data) {

    const balance = data.reduce((total, current) => total + current.lastbalance, 0);
    const lastweek = data.reduce((total, current) => total + current.lastweek, 0) / data.length;
    const lastmonth = data.reduce((total, current) => total + current.lastmonth, 0) / data.length;
    const user = data[0].user;
    
    let res = {
        accountlist: data,
        global : {
            id: "Global",
            lastbalance: balance,
            lastweek,
            lastmonth,
            name: "Global",
            phase: "---",
            user
            
        }
    }
    
    return res
}


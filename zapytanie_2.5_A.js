db.people.aggregate([
    { $match: { nationality: "Poland", sex: "Female"} },
    { $unwind : "$credit" },
    { $addFields: {balance_decimal: {$convert: { input: "$credit.balance", to: "decimal", onError: Error }}} },
    { $group: { 
        _id: "$credit.currency" , 
        totalBalancePerCurrency: {$sum: "$balance_decimal"}, 
        avarageBalance: {$avg: "$balance_decimal"}
    } }
]).forEach(e => printjson(e))

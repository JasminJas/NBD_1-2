let resultMapReduce = db.people.mapReduce(
    function() { this.credit.forEach(e => emit(e.currency, parseFloat(e.balance)) ) },
    function(key, values) { return Array.sum(values) },
    { out: { inline: 1 } }
)
printjson(resultMapReduce)

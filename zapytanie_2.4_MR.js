let resultMapReduce = db.people.mapReduce(
    function() { 
        let weight_decimal = parseFloat(this.weight)
        let height_decimal_in_miters = parseFloat(this.height) * 0.01
        let bmi = (weight_decimal / (height_decimal_in_miters * height_decimal_in_miters))
        emit(this.nationality, {"bmiMin": bmi, "bmiMax": bmi}) 
    },
    function(key, values) { return values.reduce((a, b) => {
            return {
                "bmiMin": Math.min(a["bmiMin"], b["bmiMin"]), 
                "bmiMax": Math.max(a["bmiMax"], b["bmiMax"]),
            } 
        }) 
    },
    { out: { inline: 1 } }
)
printjson(resultMapReduce)

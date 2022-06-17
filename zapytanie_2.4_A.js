db.people.aggregate([
    { 
        $addFields: {
            weight_decimal: {$convert: { input: "$weight", to: "decimal", onError: Error }},
            height_decimal: {$convert: { input: "$height", to: "decimal", onError: Error }} 
        }
    },
    { 
        $addFields: {
            bmi: { $divide: [ "$weight_decimal" , { $pow: [ { $divide: ["$height_decimal", 100]}, 2 ] } ] },
        }
    },
    { $group: { _id: "$nationality",  minBmi: { $min: "$bmi" }, maxBmi: { $max: "$bmi" }} }
]).forEach(e => printjson(e))

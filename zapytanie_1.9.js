let result = db.people.updateMany({first_name: "Antonio"}, {$set: {hobby: "pingpong"}})

printjson(result)
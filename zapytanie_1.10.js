let result = db.people.updateMany({job: "Editor"}, {$unset: {email: ""}})
printjson(result)
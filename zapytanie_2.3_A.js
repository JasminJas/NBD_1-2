db.people.aggregate([
    { $group: { _id: "job", "jobSet": {$addToSet: "$job" } } },
    { $project: {"jobSet": 1, _id: 0}}
]).forEach(e => printjson(e))

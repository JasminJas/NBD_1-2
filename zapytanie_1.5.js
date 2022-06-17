printjson(db.people.find(

{ $where: function() {
        return new Date(this.birth_date).getFullYear() >= 2000
    }}, {first_name: 1, last_name: 1, "location.city": 1, _id: 0}

).toArray());
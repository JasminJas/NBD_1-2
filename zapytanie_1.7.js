printjsononeline(db.people.remove({ $where: function() {
    return parseFloat(this.height) > 190
}}))
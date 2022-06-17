db.people.find({ $where: function() {
    return (parseFloat(this.weight) >= 68 && parseFloat(this.weight) < 71.5)
}}).forEach(e => printjsononeline(e))
module.exports = function() {
    var mongoose = require("mongoose");
    var PageSchema = mongoose.Schema({
        major: String,
        degree: String,
        rank: [],
    }, {collection: "assignment.page"});

    return PageSchema;
};
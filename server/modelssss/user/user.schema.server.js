module.exports = function() {
    var mongoose = require("mongoose");
    var MovieSchema = require("../movie/movie.schema.server.js")(mongoose);


    var UserSchema = mongoose.Schema({
        usenews: [String],
        therank: [String],
        qsrank: [String],

    }, {collection: "assignment.user"});

    return UserSchema;
};
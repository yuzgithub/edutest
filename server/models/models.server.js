module.exports = function()
{
    var models={

        movieModel: require("./school/school.model.server.js")()
        // movieModel: require("./major/major.model.server.js")()



    }
    return models;
};

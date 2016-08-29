

module.exports = function (app,models) {

    var schoolModel = models.schoolModel;

    var school1= {
        id: "12",
        name: "University of Florida",
        image: "image/ufl.png",
        loc: "Gainesville,FL",
        usrank:"47",
        therank:"47",
        qsrank:"47",
        image: "image/neu.png",
        web: "ufl.edu",
        rank: "47",
        overview: "University of Florida is a public institution that was founded in 1853. It has a total undergraduate enrollment of 33,720, its setting is suburban, and the campus size is 2,000 acres. It utilizes a semester-based academic calendar. University of Florida's ranking in the 2016 edition of Best Colleges is National Universities, 47. Its in-state tuition and fees are $6,313 (2014-15); out-of-state tuition and fees are $28,591 (2014-15).The University of Florida is about two miles away from downtown Gainesville, a college town bolstered by the school’s nearly 50,000 students. The Florida Gators sports teams compete in the NCAA Division I Southeastern Conference, and are supported by mascots Albert and Alberta the Alligators. The Gator football team, which competes in Ben Hill Griffin Stadium — commonly called the 'The Swamp' — is particularly notorious. The team became the namesake of popular sports drink Gatorade in 1966, after freshmen Gators experimented with the novel beverage. The annual Gator Growl, held each Homecoming weekend, has been called the largest student-run pep rally in the world. About 15 percent of students are involved in the school’s 60-plus fraternities and sororities. Freshmen do not have to live on campus, though about 80 percent opt to do so. All students can partake in Gator Nights, held every Friday, which offer free late-night entertainment and a free midnight breakfast.The school has well-regarded graduate programs through the engineering school, Hough Graduate School of Business, Levin College of Law and the College of Medicine. The university is also integrated with retirement community Oak Hammock, where students can work, complete internships in health sciences and find mentors. Famous graduates of the University of Florida include home repair television sensation Bob Vila, Heisman Trophy winner Steve Spurrier and former U.S. Sens. Bob Graham and Connie Mack.",
        applyddl: "November 1",
        edddl: "N/A",
        applyfee: "$30",
        caa: "No",
        satddl: "December 31",
        acptrate: "47%",
        toefl: "80",
        ielts: "6",
        sat: "1780-2040",
        reading: "570-670",
        math: "590-690",
        writing: "590-680",
        grarate: "86%",
        twentyless: "49.1%",
        fiftymore: "16.1%",
        white: "58%",
        hispanic: "19%",
        asian: "8%",
        black: "7%",
        twomore: "3%",
        unknown: "3%",
        interate: "1.73%",
        gradenroll: "16630",
        underenroll: "33720",
        male: "45%",
        female: "55%",
        tuifee: "$34904",
        roomboard: "$9630",
        total: "$44534",
        interaid: "Yes",
        salary: "$5130",
        // undermajor: [{
        //     depart: "Science/Math:", major: [{major: "Animal Science", rank: ""}, {major: "Astronomy", rank: ""},
        //         {major: "Chemistry", rank: "35"}]
        // }, {
        //     depart: "Science/Math:", major: [{major: "Animal Science", rank: ""}, {major: "Astronomy", rank: ""},
        //         {major: "Chemistry", rank: "35"}]
        // }],
        // gradumajor: [{
        //     depart: "Business School", major: ["Master of Accounting",
        //         "Master of International Business"]
        // }, {
        //     depart: "Business School", major: ["Master of Accounting",
        //         "Master of International Business"]
        // }]
    };
// var mrank = {major:"Engineering",degree:"Undergraduate",rank:["Princeton University","Havard University",
// "Massachusetts Institute of Technology"]}
    // var rank = {
    //     usrank: [{_id: "1", rank: "1", image: "image/neu.png", name: "Princeton University"},
    //         {_id: "2", rank: "2", image: "image/neu.png", name: "Havard University"},
    //         {_id: "3", rank: "3", image: "image/neu.png", name: "Yale University"},
    //         {_id: "4", rank: "4", image: "image/neu.png", name: "Columbia University"},
    //         {_id: "5", rank: "5", image: "image/neu.png", name: "Stanford University"}
    //     ], therank: [{_id: "1", nrank: "1", wrank: "1", image: "image/neu.png", name: "Princeton University"},
    //         {_id: "2", nrank: "1", wrank: "2", image: "image/neu.png", name: "Havard University"},
    //         {_id: "3", nrank: "1", wrank: "3", image: "image/neu.png", name: "Yale University"},
    //         {_id: "4", nrank: "1", wrank: "4", image: "image/neu.png", name: "Columbia University"},
    //         {_id: "5", nrank: "1", wrank: "5", image: "image/neu.png", name: "Stanford University"}
    //     ], qsrank: [{_id: "1", nrank: "1", wrank: "1", image: "image/neu.png", name: "Princeton University"},
    //         {_id: "2", nrank: "1", wrank: "2", image: "image/neu.png", name: "Havard University"},
    //         {_id: "3", nrank: "1", wrank: "3", image: "image/neu.png", name: "Yale University"},
    //         {_id: "4", nrank: "1", wrank: "4", image: "image/neu.png", name: "Columbia University"},
    //         {_id: "5", nrank: "1", wrank: "5", image: "image/neu.png", name: "Stanford University"}
    //     ]
    // };

    app.get("/api/college/:id", getschoolbyId);
    app.get("/api/mrank/:degree/:major", getmrank);
    app.get("/api/us", getusnews);




    function getusnews(req, res) {
    schoolModel
        .findAll()
        .then(
            function(school) {
                res.json(school);
            },
            function(err) {
                res.status(400).send(err);
            }
        )}

//majorranking.html
    function getmrank(req, res) {
        var degree = req.query.degree;
        var major = req.query.major;
        res.send(mrank);
    }


    // function getschoolbyId(req, res) {
    //     var id = req.params["id"];
    //
    //     schoolModel
    //         .findSchoolByImdbID(id)
    //         .then(
    //             function(movie) {
    //                 res.json(movie);
    //             },
    //             function(err) {
    //                 res.status(400).send(err);
    //             }
    //         )
    // }
    function getschoolbyId(req, res) {
        var id = req.params["id"];

        schoolModel
            .findSchoolById(id)
            .then(
                function(movie1) {
                    res.json(movie1);
                },
                function(err) {
                    res.status(400).send(err);
                }
            )
    }

    // function getschoolbyId(req, res) {
    //     var id = req.params["id"];
    //     res.send(school1);
    //
    // }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////



const Course = require('../models/Course');
const Friend = require('../models/Friend');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SitesController {
    news(req, res, next) {
        // Course.find({}, function(err,courses) {
        //     if(!err) {
        //         res.json(courses);
        //     }else {
        //         res.status(400).json({error: 'ERROR!!!'});
        //     }
        // });

        Course.find({}).lean()
            .then((courses) => {
                res.render('news', {
                    courses: courses,
                });
            })
            .catch(next);
        // res.render('news');
    }
    

    searchs(req, res, next) {
        Friend.find({}).lean()
            .then((friends) => {
                res.render('searchs', {
                    friends: friends,
                });
            })
            .catch(next);
    }
}

module.exports = new SitesController();

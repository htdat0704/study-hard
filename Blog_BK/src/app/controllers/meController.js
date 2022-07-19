const Course = require('../models/Course');

class meController {
    // GET /courese/slug
    async storedCourses(req, res, next) {
        try{
            let arrObj = await Course.find({}).lean();

            // sort
            if(await req.query.hasOwnProperty('_sort')){
                arrObj =  await Course.find({}).lean().sort({
                    [req.query.column]: [req.query._sort],
                })
            }


            const countDelete = await Course.countDocumentsDeleted().lean();
            // const arrObj = await Course.find({}).lean();
            await res.render('me/stored-courses', {
                courses: arrObj,
                countDelete,
            });
        }catch(e){
            next(e);
        }
        // const countDelete = await Course.countDocumentsDeleted().lean();
        // const arrObj = await Course.find({}).lean();
        // await res.render('me/stored-courses', {
        //     courses: arrObj,
        //     countDelete,
        // });
        // Course.find({}).lean()
        //     .then(obj => res.render('me/stored-courses',{ courses: obj}))
        //     .catch(next)
    }

    async trashCourses(req, res, next) {
        let arrObj = await Course.findDeleted({}).lean();

        if(await req.query.hasOwnProperty('_sort')){
            arrObj =  await Course.findDeleted({}).lean().sort({
                [req.query.column]: [req.query._sort],
            })
        }

        const count = await Course.countDocuments().lean();
        await res.render('me/trash-courses', {
            courses: arrObj,
            count,
        });
        // Course.findDeleted({}).lean()
        //     .then(obj => res.render('me/trash-courses',{ courses: obj}))
        //     .catch(next)
    }
}

module.exports = new meController();

const Course = require('../models/Course');

class CourseController {
    //GET /courese/create
    create(req, res, next) {
        res.render('courses/create');
    }

    //POST /courese/create
    store(req, res, next) {
        //res.json(req.body);
        const formData = req.body; // lấy infor data từ form
        const coures = new Course(req.body); // khởi tạo obj
        coures
            .save() // thêm vào db
            .then(() => res.redirect('/news')) // chuyển qua trang news
            .catch((error) => {});

        //res.send('Course send!');
    }

    //GET /courses/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .lean()
            .then((course) => res.render('courses/edit', { course: course }))
            .catch(next);
    }

    // PUT /courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses')) // / có / đằng
            .catch(next);
    }

    // DELETE /courses/:id

    destroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // DELETESOFT /courses/:id
    destroySoft(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // patch / courses/restore/:id
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('/me/trash/courses'))
            .catch(next);
    }

    handleFormAction(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Course.delete({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({ messsage: 'ACTION IS invalid' });
        }
    }

    handleFormTrashAction(req, res, next) {
        switch (req.body.action) {
            case 'deleteAll':
                Course.deleteMany({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            case 'reverse':
                Course.restore({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({ messsage: 'ACTION IS invalid' });
        }
    }

    // GET /courese/slug
    show(req, res, next) {
        // try{
        //     let obj  = await Course.findOne({slug: req.params.slug }).lean();
        //     res.render('courses/views',{course: mongooseToObject(obj)});
        // }catch(e){
        //     next(e);
        // }
        Course.findOne({ slug: req.params.slug })
            .lean() // find slug có slug giống trên url
            .then((course) => {
                res.render('courses/views', { course: course }); // render ra html
            })
            .catch(next);
    }

    // get
}

module.exports = new CourseController();

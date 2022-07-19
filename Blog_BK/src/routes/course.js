const express = require('express');
const router = express.Router();

const CoursesController = require('../app/controllers/CourseController');

router.post('/store',CoursesController.store); // craete
//middleware
// router.get('/create',async(req,res,next)=>{
//     if(req.query.ve == 'vip') return next();
//     res.status(403).json({message: "Access denied"}); 
// } , CoursesController.create); // toi trang create

router.get('/create', CoursesController.create); // toi trang create
router.delete('/:id', CoursesController.destroy); // toi trang delete
router.delete('/soft/:id', CoursesController.destroySoft); // toi delete soft
router.get('/edit/:id', CoursesController.edit); // toi trang update
router.post('/handle-form-store-action', CoursesController.handleFormAction); // toi trang update select store
router.post(
    '/handle-form-trash-action',
    CoursesController.handleFormTrashAction,
); // toi trang update select   trash
router.put('/:id', CoursesController.update); // update
router.patch('/restore/:id', CoursesController.restore); // patch update resotre
router.get('/:slug', CoursesController.show); // toi id name slug

module.exports = router;

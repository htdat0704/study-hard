const { argon2d } = require('argon2');
const Post = require('../models/Post');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const session = require('express-session');
const verifyToken = require('../middleware/auth');
// //sesssion
// var session = require('express-session');
class PostController {
    async views(req, res, next) {
        // if(!req.session.accessToken){
        //     res.render('auth/login');
        // }else{
        // const posts = await Post.find().lean();
        // const accessToken = req.session.accessToken;
        // res.render('post/views', { posts: posts, accessToken: accessToken });
        // }

        const posts = await Post.find({}).lean();
        res.render('post/views', {
            posts: posts,
            accessToken: req.session.accessToken,
        });
    }

    async create(req, res, next) {
        res.render('post/create-post', {
            accessToken: req.session.accessToken,
        });
    }

    // post/stored

    async stored(req, res, next) {
        try {
            const formData = req.body;
            formData.user = await req.userId;
            console.log(formData);
            const newPost = new Post(formData);
            await newPost.save();

            // res.render('views/user', {
            //     users: users,
            //     accessToken: req.session.accessToken,
            // });
            res.redirect('/post/views');
        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: 'err',
            });
        }
    }

    async editPost(req, res, next) {
        const post = await Post.findOne({ _id: req.params.id }).lean();
        res.render('post/edit-post', {
            post: post,
            accessToken: req.session.accessToken,
        });
    }

    async putPost(req, res, next) {
        try {
            await Post.updateOne({ _id: req.params.id }, req.body);
            res.redirect('/post/views');
        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: 'err',
            });
        }
    }
}

module.exports = new PostController();

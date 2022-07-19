const { argon2d } = require('argon2');
const User = require('../models/User');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const session = require('express-session');
const verifyToken = require('../middleware/auth');
// //sesssion
// var session = require('express-session');
class UserController {
    async show(req, res, next) {
        res.send(req.userId);
    }

    async apiAuth(req, res, next) {
        res.render('auth/register');
    }

    async storeRegister(req, res, next) {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({
                message: 'Bad requests',
            });
        }

        try {
            const user = await User.findOne({ username: username });

            if (user) {
                return res.status(400).json({
                    message: 'Username already taken',
                });
            }

            const hashedPassword = await argon2.hash(password);
            const newUser = new User(req.body);
            newUser.password = hashedPassword;
            await newUser.save();

            const accessToken = jwt.sign(
                { userId: newUser._id },
                process.env.ACCESS_TOKEN_SECRET,
            );

            req.session.accessToken = accessToken;

            const users = await User.find().lean();

            res.render('views/user', {
                users: users,
                accessToken: req.session.accessToken,
            });

        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: 'err',
            });
        }
    }

    async views(req, res, next) {
        if(!req.session.accessToken){
            res.render('')
        }else{
            const users = await User.find().lean();
            const accessToken = req.session.accessToken;
            res.render('views/user', { users: users, accessToken: accessToken });
        }
    }

    async loginView(req, res, next) {
        res.render('auth/login', {
            alertWrong: undefined,
        });
    }

    async storeLogin(req, res, next) {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({
                message: 'Bad requests',
            });
        }

        try {
            const user = await User.findOne({ username: username });

            if (!user) {
                return res.render('auth/login', {
                    alertWrong: 'Wrong',
                });
            }

            const passwordValid = await argon2.verify(user.password, password);
            if (!passwordValid) {
                return res.render('auth/login', {
                    alertWrong: 'Wrong',
                });
            }

            const users = await User.find().lean();

            const accessToken = jwt.sign(
                { userId: user._id },
                process.env.ACCESS_TOKEN_SECRET,
            );
            req.session.accessToken = accessToken;
            res.render('views/user', {
                users: users,
                accessToken: req.session.accessToken,
            });
        } catch (e) {
            console.log(e);
            next(e);
        }
    }
}

module.exports = new UserController();

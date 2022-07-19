const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();
const db = require('./config/db/db.js');
//express handlebars;
const engine = require('express-handlebars');
const morgan = require('morgan');
// connect routes index.js
const route = require('./routes');
// delete soft
var methodOverride = require('method-override');
app.use(methodOverride('_method'));
//sesssion
var session = require('express-session');
// app.set('trust proxy', 0) // trust first proxy

app.use(methodOverride('_method'));

app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: false,
            // maxAge: 30000000
        },
    }),
);

app.get('/demo', function (req, res, next) {
    res.json(session.Cookie);
});

app.get('/logout', function (req, res, next) {
    req.session.destroy();
    res.send('Destroy');
});

//connect DB
db.connect();

// res.body
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'resources\\views'));
const PORT = 3000;

// express handlebars
app.engine(
    'hbs',
    engine.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
            isWrong: (value) => value == 'Wrong',
            isLogin: (accessToken) => {
                if (accessToken) {
                    return true;
                } else {
                    return false;
                }
            },
        },
    }),
);

app.set('view engine', 'hbs');

route(app);
app.listen(PORT, () => console.log(`SERVER start on PORT ${PORT}`));

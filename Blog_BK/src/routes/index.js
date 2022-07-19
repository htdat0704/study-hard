const sitesRouter = require('./sites');
const homeRouter = require('./home');
const coursesRouter = require('./course');
const meRouter = require('./me');

function route(app) {
    app.use('/news', sitesRouter); // /news thì use sitesRouter
    app.use('/courses', coursesRouter); // /course thì use courseRouter v_d: http://localhost:3000/course
    app.use('/me', meRouter); // me http://localhost:3000/me

    app.use('/', homeRouter);

    // app.get('/searchs', (req, res) => {
    //     res.render('searchs')
    // });

    // app.post('/searchs', (req, res) => {
    //     console.log(req.body);
    //     res.render('searchs')
    // });
}

module.exports = route;

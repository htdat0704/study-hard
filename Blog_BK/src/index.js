const engine = require('express-handlebars');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./config/db');
var methodOverride = require('method-override');

const sortMiddleware = require('./app/middlewares/SortMiddleware');
//--------------------------------------------//
// TEMPLATE ENGINE
app.use(methodOverride('_method'));
//Connect db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(sortMiddleware); // ai có url cuối là ?_sort thì chức năng này hoạt động

// middleware
// const bacBaoVe = async (req,res,next) => {
//     const tenVe = await req.query.ve;
//     const isGo =  await ['vethuong','vevip'].includes(tenVe);
//     if(isGo){
//         return next();  
//     }else{
//         res.json({
//             message: "denied",
//         })  
//     }
// }

// app.use(bacBaoVe);

// app.get('/middleware/:id',
//     async (req,res,next) =>{
//         const tenVe = await req.params.id;
//         const isGo =  await ['vethuong','vevip'].includes(tenVe);
//         if(isGo){
//             res.json({
//                 message: "succes",
//             })   
//         }else{
//             return next()
//         }
//     },
//     async (req,res,next) =>{
//         try{
//             return res.json({
//                         message: "denied",
//                     })
//         }catch(e){
//             next(e);
//         }
//     })

// res.body
app.use(
    express.urlencoded({
        extended: true,
    }),
);


app.use(express.json());

// express handlebars
app.engine(
    'hbs',
    engine.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
            sortable: (field, sort) =>{
                const sortType = field === sort.column ? sort.type : 'default';

                const icons = {
                    default: 'oi oi-elevator',
                    asc: 'oi oi-data-transfer-upload',
                    desc: ' oi oi-data-transfer-download',
                };

                const types = {
                    default: 'desc',
                    asc: 'desc',
                    desc: 'asc',
                };

                const icon = icons[sortType];
                const type = types[sortType];

                return`<a href="?_sort=${type}&column=${field}">
                            <span class="${icon}"></span>
                        </a>`;
                
            }
        },
    }),
);
app.set('view engine', 'hbs');

// cách mình tìm đến file, hệ điều hành window
app.set('views', path.join(__dirname, 'resources\\views')); 

//console.log('PATH: ', path.join(__dirname, 'resources/views')) //xem đường dẫn

//
//HTTP logger
app.use(morgan('combined'));

//Route init
route(app);

// app.get('/', (req, res) => {

//     res.render('home')
// });

// app.get('/news', (req, res) => {
//     res.render('news')
// });

// app.get('/searchs', (req, res) => {
//     res.render('searchs')
// });

// app.post('/searchs', (req, res) => {
//     console.log(req.body);
//     res.render('searchs')
// });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

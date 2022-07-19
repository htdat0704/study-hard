module.exports = async(req,res,next) =>{
    res.locals._sort = {
        enabled: false,
        type: 'desc',
    }

    if(await req.query.hasOwnProperty('_sort')){
        res.locals._sort.enabled = true;
        res.locals._sort.type = req.query._sort;
        res.locals._sort.column = req.query.column;
    }

    next();
}
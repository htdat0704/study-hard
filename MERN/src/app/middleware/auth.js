const jwt = require('jsonwebtoken');

const verifyToken = (req,res,next) =>{
    const token = req.session.accessToken;

    if(!token){
        return res.status(401).json({
            massage: " Access token not found",
        })
    }else{
        try{
            const decoded = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);

            req.userId = decoded.userId;
            next()
        }catch(e){
            console.log(e);
            return res.status(403).json({success: "false", message: 'Invalid Token'});
        }
    }
}   

module.exports = verifyToken;
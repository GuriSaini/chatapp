const jwt = require("jsonwebtoken")
module.exports = async(req,res,next) =>{
    try {
        if(!req.headers.authorization) throw "Forbidden!!"
        const token = req.headers.authorization;
    const payload = await jwt.verify(token,"CHAT");
    next();
    } catch (error) {
        res.status(401).json({
            message:"Forbidden"
        })
    }
    

}
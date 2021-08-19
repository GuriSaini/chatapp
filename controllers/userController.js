const mongoose = require("mongoose")
const User = mongoose.model("User")
const sha256 = require("js-sha256");
const jwt = require("jsonwebtoken")


exports.register = async(req,res) =>{
   const {name,email,password} = req.body;

//    const emailRegex = /[@gmail.com|@yahoo.com|@live.com]$/;
//    if(emailRegex.test(email)) throw "Email is not support from your domain";
   if(password.length < 6) throw "Password must be 6 character long.";

   const userExists = await User.findOne({email})
   if(userExists) throw "User already exists";
   const user = new User({name,email,password:sha256(password+"ABC")});
   await user.save();

   res.json({
       message:`User ${name} register successfully!`
   })

}

exports.login = async(req,res) =>{
    
    const {email,password}= req.body

    const user = await User.findOne({email,password:sha256(password+"ABC")})
    if(!user) throw "Email and password not match";

    const token = jwt.sign({id:user.id},"CHAT");

    res.json({
        message:"User logged in successfully!",
        token:token
    })
}
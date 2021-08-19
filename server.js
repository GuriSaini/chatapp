require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE)
mongoose.connection.on("error",(err)=>{
 console.log(err.message)
})
mongoose.connection.once("open",()=>{
    console.log("connect")
})
//Models
require("./models/Chatroom")
require("./models/Message")
require("./models/User")



const app = require('./app');

app.listen(3001,()=>{
    console.log("runing");
})
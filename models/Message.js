const mongoose = require("mongoose")

const messageSchema = new mongoose.Schema({
    chatroom:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Chatroom"
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    message:{
        type:String,
        required:"Message is required"
    },
   
},{
    timestamps:true
})

module.exports = mongoose.model('Message',messageSchema)
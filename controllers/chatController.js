const mongoose = require("mongoose")
const Chatroom = mongoose.model("Chatroom")

exports.createChatroom = async(req,res)=>{
    const {name} = req.body

    const chatroomExists = await Chatroom.findOne({name})
    if(chatroomExists) throw "Chatroom already"
    const chatroom = new Chatroom({name})
    await chatroom.save();
    res.json({
        message:"Chatroom createed!"
    })
}
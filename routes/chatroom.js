const router = require("express").Router();
const {catchErrors}  = require("../handlers/errorHandlers")
const chatController = require("../controllers/chatController");

const auth = require("../middlewares/auth")


router.post("/",auth,catchErrors(chatController.createChatroom));


module.exports = router
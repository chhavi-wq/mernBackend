const express = require("express");
const {create_Client,get_message,get_id,delete_id} = require("../controller/controller")

const router = express.Router();

router.post("/create",create_Client);

router.get("/message",get_message)

router.get("/message/:id",get_id)

router.get("/delete/:id",delete_id)

module.exports=router;
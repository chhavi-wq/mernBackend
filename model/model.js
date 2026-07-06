const mongoose = require("mongoose");
const clientSchema = new mongoose.Schema({
    fullName:{
        type : String,
        require : true
    },
    email:{
        type: String,
        require : true
    },
    subject:{
        type: String,
        require : true
    },
    message:{
        type: String,
        require : true
    }
})
const client = mongoose.model("Client",clientSchema);
module.exports=client; 
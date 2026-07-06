const express = require("express");
const mongoose = require("mongoose");
const router = require("./route/route")
const PORT = 8000;


const app = express();
app.use(express.json());

app.use("/api", router)
mongoose.connect("mongodb://localhost:27017/info").then(()=>{
    console.log("connected to mongodb")
    app.listen(PORT, () => {
      console.log(`app is listening on port ${PORT}`)
    })
})
.catch((err)=>{
    console.log(`not connected ${err}`);
})




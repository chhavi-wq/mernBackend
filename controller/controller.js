const Client = require("../model/model");
const nodemailer = require("nodemailer");
const path = require("path");

//create a new client
const create_Client = async(req,res)=>{
    try{
        const {fullName, email, subject, message} = req.body;
        const client =  await Client.findOne({email})
        if(client){
            return res.status(400).json({message:"email already exists"})
        }
        if(!fullName || !email || !message || !subject){
            return res.status(401).json({message:"enter all fields"})
        }
        const newClient = new Client({
            fullName,email,subject,message
        })
        await newClient.save();

        res.status(201).json({
        message: "Client created successfully",
        data: newClient
});

    }
      catch (err) {
     console.log(err);
      res.status(500).json({
       message: "Internal server error",
      error: err.message
            });
        }
}

//get all messages or clients

const get_message = async(req,res)=>{
    try{
        const getClient = await Client.find();
        res.status(200).json({message:"all client are :",getClient});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"internal server error",error:err.message})
    }
}

//get specific mesage by id

const get_id = async (req,res)=>{
    try{
        const getId= req.params.id;
        const id = await Client.findById(getId);
        if(!id){
           return res.status(404).json({message:"client not found"})
        }
        res.status(200).json({message:"cleint found",id})
    }
    catch(err){
        res.status(500).json({message:"internal server error",error:err.message})
    }
}

// delete message
const delete_id = async (req,res)=>{
    try{
        const getID = req.params.id;
        const id = await Client.findByIdAndDelete(getID);
        if(!id){
            return res.status(404).json({message:"Client not found"})
        }
        res.status(200).json({message:"client deleted successfully",id})
    }
    catch{
        res.status(500).json({message:"internal server error",error:err.message})
    }
}
// send data to your email acount

const send_email = async(req,res)=>{
    try{
        const {fullName, message, subject, email} = req.body;

        const transporter = nodemailer.createTransporter({
            
        })


    }
    catch{
        res.status(500).json({message:"internal server error",error:err.message})
    }
}


module.exports={create_Client,get_message,get_id,delete_id};

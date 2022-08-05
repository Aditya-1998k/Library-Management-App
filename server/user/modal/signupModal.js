const mongoose= require("mongoose");

const userSchema=mongoose.Schema({
    user_name:String,
    mobile_number:Number,
    password:String,
    email:String,
    college:String
})

const userModal=mongoose.model("user", userSchema);
module.exports=userModal;
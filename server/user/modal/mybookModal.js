const mongoose= require("mongoose");

const mybookSchema=mongoose.Schema({
    user_name:String,
    bookname:String,
    item_name:String,
    item_image:String,
    item_price:Number,
    item_category:String
})

const mybookModal=mongoose.model("mybook", mybookSchema);
module.exports=mybookModal;
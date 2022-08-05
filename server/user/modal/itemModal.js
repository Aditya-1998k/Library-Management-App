const mongoose= require("mongoose");

const itemSchema=mongoose.Schema({
    item_name:String,
    item_image:String,
    item_price:Number,
    item_category:String
})

const itemModal=mongoose.model("item", itemSchema);
module.exports=itemModal;

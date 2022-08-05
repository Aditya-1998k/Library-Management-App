const express=require("express");
const itemModal=require("../modal/itemModal")

const router=express.Router();

router.post("/add", (req, res)=>{
    itemModal.create({item_name:req.body.item_name, item_image:req.body.item_image, item_price:req.body.item_price, item_category:req.body.item_category}).then((item)=>{
        res.status(200).send("Item added successfully")
    }).catch((err)=>{
        res.status(400).send(err)
    })
})
router.get("/", (req, res)=>{
    itemModal.find().then((data)=>{
        res.status(200).send({item:data})
    })
})
module.exports=router;
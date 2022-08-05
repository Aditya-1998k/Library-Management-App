const express=require("express");
const mybookModal=require("../modal/mybookModal")

const router=express.Router();

router.post("/add", (req, res)=>{
    console.log(req.body.item_name)
    mybookModal.create({item_name:req.body.item_name, item_image:req.body.item_image, item_price:req.body.item_price, item_category:req.body.item_category}).then((item)=>{
        res.status(200).send("Item added successfully")
    }).catch((err)=>{
        res.status(400).send(err)
    })
})
router.get("/", (req, res)=>{
    mybookModal.find().then((data)=>{
        res.status(200).send({item:data})
    })
})
module.exports=router;
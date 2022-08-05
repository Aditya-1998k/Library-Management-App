const express=require("express");
const signupModal=require("../modal/signupModal");
const jwt=require("jsonwebtoken")

const router=express.Router();

router.post("/add", (req, res)=>{
    signupModal.create({user_name:req.body.user_name, mobile_number:req.body.mobile_number, email:req.body.email, college:req.body.college, password:req.body.password }).then((item)=>{
        res.status(200).send("user added successfully")
    }).catch((err)=>{
        res.status(400).send(err)
    })
})
router.get("/", (req, res)=>{
    signupModal.find({user_name:req.body.user_name, password:req.body.password}).then((data)=>{
        res.status(200).send({user:data})
    })
})
module.exports=router;
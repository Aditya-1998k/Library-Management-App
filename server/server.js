const express=require("express");
const mongoose=require("mongoose");
const multer=require("multer")();
const itemController=require("./user/routes/item");
const userController=require("./user/routes/user");
const mybookController=require("./user/routes/mybook");
const cors=require("cors");

const app=express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(multer.array());
app.use(cors())

//creating server

app.listen(3001, (err)=>{
    console.log("server created successfully")
});

//connecting with database
mongoose.connect("mongodb://127.0.0.1:27017/Library", (req, res)=>{
    console.log("connected to local database");
})

app.get("/", (req, res)=>{
    res.send("hi i am backend of your application")
});

app.use("/item", itemController);
app.use("/user", userController);
app.use("/mybook", mybookController)
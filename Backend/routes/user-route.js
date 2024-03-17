const express=require("express")

const route=express.Router()

const user_controller=require("../controllers/user-controllers");


route.get("/",user_controller.getuserList)

route.post("/signup",user_controller.Newusersignup)

route.post("/login",user_controller.userlogin)

module.exports=route
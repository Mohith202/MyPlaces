const express=require("express")
const {check}=require("express-validator")

const route=express.Router()

const user_controller=require("../controllers/user-controllers");


route.get("/",user_controller.getuserList)

route.post("/signup",[check("email").normalizeEmail().isEmail(),check("password").not().isLength({min:6})],user_controller.Newusersignup)

route.post("/login",user_controller.userlogin)

module.exports=route
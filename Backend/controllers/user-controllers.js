const {v4:uuidv4}=require("uuid")

const HttpError=require("../model/http-error")

let DUMMY_PLACES=[{
    id:"id1",
    name:"K Mohith Goud",
    email:"test@gmail.com",
    password:"tester"
},

]




const getuserList=(req,res,next)=>{
    res.status(200).json(DUMMY_PLACES)
}

const Newusersignup=(req,res,next)=>{
    const {user,email,password}=req.body;
    const hasuser=DUMMY_PLACES.find(p=>{
        if (email===p.email){
            return res.json({message:"user alrea dy exist"})
        }
    })
    const createUser={
        id:uuidv4,
        user,
        email,
        password
    }
    DUMMY_PLACES.push(createUser)
    res.json({message:"New user Created"})
}

const userlogin=(req,res,next)=>{
    const {email,password}=req.body
    const user=DUMMY_PLACES.find(p=>{
         if (email===p.email  && password===p.password)
         {
                return res.json({message:"user Found"})
         }
    })
    if (!user){
        return next(new HttpError("No user Found",404))
    }
}

exports.getuserList=getuserList
exports.Newusersignup=Newusersignup
exports.userlogin=userlogin
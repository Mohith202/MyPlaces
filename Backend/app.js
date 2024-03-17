const express=require("express");
const bodyParser=require('body-parser');

const place=require("./routes/places-route")

const userPlace=require("./routes/user-route")

const HttpError=require("./model/http-error")

const app=express();

app.use(bodyParser.json());

app.use("/api/places",place);

app.use("/api/users",userPlace);


app.use((req,res,next)=>{
    const error= new HttpError("route was not found",404);
    return next(error)
})


app.use((error,req,res,next)=>{
    if (res.headerSent){
        return next(error);
    }
    else{
        res.status(error.code || 500).json({message:error.message||"something went wront"})
    }
})

app.listen(3000);
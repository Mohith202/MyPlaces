const express=require("express");
const bodyParser=require("body-parser")
const mongoose=require("./mongoose.js")


const app=express();

app.use(bodyParser.json())
app.post("/products",mongoose.createproduct);
app.get("/products",mongoose.getproduct);

app.listen(3000)
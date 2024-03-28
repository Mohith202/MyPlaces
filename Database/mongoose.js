const mongoose=require("mongoose")

const product =require("./model/product")



const uri = `mongodb+srv://20eg103319:${password}@mydata.bkwkloc.mongodb.net/?retryWrites=true&w=majority&appName=MyData`;
mongoose.connect(uri).then(()=>{
    console.log("connected")
}).catch((error)=>{
    console.log("connection failed")
})


const createproduct =async (req,res,next)=>{
    const createdproduct=new product({
        name:req.body.name,
        price:req.body.price
    });
    const result=  await createdproduct.save();
    res.json(result)
};
const getproduct=async (req,res,next)=>{
    const result=await product.find().exec();
    res.json(result)
}

exports.createproduct=createproduct;
exports.getproduct=getproduct;
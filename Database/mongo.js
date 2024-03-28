const MongoClient=require("mongodb").MongoClient;



const { urlencoded } = require('body-parser');



const uri = `mongodb+srv://20eg103319:${password}@mydata.bkwkloc.mongodb.net/?retryWrites=true&w=majority&appName=MyData`;





const createPlaces=async (req,res,next)=>{
  const newPlace={
    name:req.body.name,
    price:req.body.price,
  }
  const client= new MongoClient(uri);
  try{
    await client.connect();
    const db=client.db("MyData");
     const result=await db.collection("Places").insertOne(newPlace);

    console.log(result)

  }catch(error){
    return res.json({messsage:"Data not stored",})
  }
  client.close();
  res.json(newPlace)

}

const getPlace=async (req,res,next)=>{

    let results
    const client=new MongoClient(uri);
    try{
      client.connect()
      const db=client.db("MyData");
       results=await db.collection("Places").find().toArray();
    }catch(error){
      return res.json({messsage:"Data not stored",})
    }
    client.close();
    res.json(results)
}

exports.createProduct=createPlaces;
exports.getProduct=getPlace;
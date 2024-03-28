const HttpError=require("../model/http-error")
const coordinate=require("../model/Location")
const Place=require("../model/PlaceSchema")

const {validationResult}=require("express-validator")
const {v4:uuidv4}=require("uuid")

let DUMMY_PLACES=[{
    id:"id1",
    title:"TAJA MAHAL",
    description:"one of the most famous place ijn agra",
    location:{
        lat:40.784474,
        lng:-73.9871516
    },
    address:"hvzuh szisj;vhI address/922777",
    creator:"u1"
},
{
    id:"id2",
    title:"TAJA MAHAL",
    description:"one of the most famous place ijn agra",
    location:{
        lat:40.784474,
        lng:-73.9871516
    },
    address:"hvzuh szisj;vhI address/922777",
    creator:"u2"
}
]





const getPlaceById=async (req,res,next)=>{
    console.log("object")
    const Id=req.params.pid;
    let place
    try{
         place= await Place.findById(Id)
    }catch{
        const error = new HttpError("something went wrong, Place not found",500)
        return next(error)
    }
    if (!place || place.length===0){
    // res.status(404).json({message:"cant find tje ID"});
    throw new HttpError("place not found",404)
    }
    else{

        res.json(place)
    }
}





async  function getPlacesByuser(req,res,next){
    
        const UserId=req.params.uid;
      let place
        try{
            place=await Place.find({creator:UserId})
        }catch{
            return res.json({message:"Place not found by user ID"})
        };
        if (!place || place.length===0){
        //    return res.status(404).json({message:"cant find tje ID"})
           return  next(new HttpError("cant find the place ID",404))
            }
        res.json(place)
    }




const Createplace=async (req,res,next)=>{
    const errors=validationResult(req);
    if (!errors.isEmpty()){
        return next(new HttpError("Not correct.Enter propeer data",422))
    }
    const {title,description,address,creator}=req.body
    const newPlace= new Place({
        title,
        description,
        image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fstartupsuccessstories.in%2Fwp-content%2Fuploads%2F2019%2F12%2FHelo-Logo.jpg&tbnid=PgM4pKSMmjk5EM&vet=12ahUKEwjzgqb6vYqFAxWGUGwGHZczA8gQMygCegQIARB1..i&imgrefurl=https%3A%2F%2Fstartupsuccessstories.in%2Fhelo-reveals-top-5-content-themes-that-made-helo-community-create-share-and-follow-the-most-in-2019%2F&docid=Q35y3NsMK2LAzM&w=718&h=718&q=helo&ved=2ahUKEwjzgqb6vYqFAxWGUGwGHZczA8gQMygCegQIARB1",
        address,
        location:coordinate(address),
        creator
});
try{
    const result=await newPlace.save()

        res.status(201).json({message:"Palce Created"})
}catch(err){
    const error=new HttpError(error,404)
        return next(error)
    }
}





const Updateplace=async (req,res,next)=>{
    const errors=validationResult(req);
    if (!errors.isEmpty()){
        console.log(errors)
        return next(new HttpError("Not correct.Enter propeer data",422))
    }
    const {title,description}=req.body
    const PlaceId=req.params.pid
    let place
    try{
        place=await Place.findById(PlaceId)
    }catch(err){
        const error=new HttpError(
            err,
            500
        )
        return next(error)
    }

            // return next(new HttpError("No place with Id to Edit",404))
    
    place.title=title;
    place.description=description;
    try{
        update=await place.save()
    }catch(err){
        const error=new HttpError(
            err,
            500
        )
        return next(error)
    }
    res.json({Place:place.toObject({getter:true})})
}





const deletePlaceById=async (req,res,next)=>{
    const PlaceId=req.params.pid
    let place
    try{
       place= await Place.findById(PlaceId)
    }catch(err){
        return next(new HttpError(err,500))
    }
    try{
        console.log("object")
        upd=await place.deleteOne().exec()
        console.log(upd)
    }catch(error){
        return next(new HttpError("not deleted",500))
    }
    res.status(200).json({message:"done"})

}




exports.getPlaceById=getPlaceById
exports.getPlacesByuser=getPlacesByuser
exports.createplace=Createplace
exports.updateplace=Updateplace
exports.deletePlaceById=deletePlaceById
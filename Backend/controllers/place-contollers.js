const HttpError=require("../model/http-error")
const coordinate=require("../model/Location")

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





const getPlaceById=(req,res,next)=>{
    console.log("object")
    const Id=req.params.pid;
    const place=DUMMY_PLACES.find(p=>{
        return p.id===Id;
    })
    if (!place || place.length===0){
    // res.status(404).json({message:"cant find tje ID"});
    throw new HttpError("place not found",404)
    }
    else{

        res.json({message:place})
    }
}





function getPlacesByuser(req,res,next){
    
        const UserId=req.params.uid;
        const place=DUMMY_PLACES.filter(p=>{
        
            return p.creator===UserId
        })    
        if (!place || place.length===0){
        //    return res.status(404).json({message:"cant find tje ID"})
           return  next(new HttpError("cant find the place ID",404))
            }
        res.json(place)
    }




const Createplace=(req,res,next)=>{
    const errors=validationResult(req);
    if (!errors.isEmpty()){
        return next(new HttpError("Not correct.Enter propeer data",422))
    }
    const {title,desc,address,creator}=req.body
    const createdplace={
        id:uuidv4(),
        title,
        description:desc,
        location:coordinate(address),
        address,
        creator
    };
    DUMMY_PLACES.push(createdplace);  //unshift for starting 
    res.status(201).json({createdplace})
}





const Updateplace=(req,res,next)=>{
    const errors=validationResult(req);
    if (!errors.isEmpty()){
        console.log(errors)
        return next(new HttpError("Not correct.Enter propeer data",422))
    }
    const {title,description}=req.body
    const PlaceId=req.params.pid
    const updatedplace={...DUMMY_PLACES.find(p=>{
        if (p.id===PlaceId)
        {
            return p

        }
        else{
            return next(new HttpError("No place with Id to Edit",404))
        }
    })}
    const PlaceIndex=DUMMY_PLACES.findIndex(p=> p.id === PlaceId)
    updatedplace.title=title;
    updatedplace.description=description;
    DUMMY_PLACES[PlaceIndex]=updatedplace
    res.status(200).json(updatedplace)
}





const deletePlaceById=(req,res,next)=>{
    const PlaceId=req.params.pid
    const deletePlace=DUMMY_PLACES.find(p=>p.id === PlaceId)
    if(!deletePlace){
        return next(new HttpError("Place not found witn id",422))
    }
    DUMMY_PLACES=DUMMY_PLACES.filter(p=>p.id !== PlaceId)
    res.status(200).json({message:"done"})

}




exports.getPlaceById=getPlaceById
exports.getPlacesByuser=getPlacesByuser
exports.createplace=Createplace
exports.updateplace=Updateplace
exports.deletePlaceById=deletePlaceById
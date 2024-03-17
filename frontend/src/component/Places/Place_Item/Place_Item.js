import {Link, } from "react-router-dom";
import {useRef,useState} from "react";



import Card from "../../utility_folder/Card.js";
import Drawer from "../../utility_folder/Drawer/Drawer.js";


import "./Place_item.css"




export default function Place_Item(props) {

    const [drawer, setdrawer] = useState(false);

    const mapEventHandler = () => {
        if (drawer === true) {
            setdrawer(false)
            console.log("ok")
        }
        else {
            setdrawer(true)
        }

    };

    return (
        <>

        <div className="drawer" style={!drawer?{display:"none"}:{dsplay:"content"}}>
        {
            drawer &&  <Drawer  click={mapEventHandler}
             long={props.long} lat={props.lat}  />
        }
        </div>
        <Card>
        <div className="card" style={{ }} >

       
           {props.img && <img src={props.img} className="card-img-top" alt="No image" />}
            <div className="card-body">
                <h2>{props.user}</h2>
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.desc}</p>
                <div className="button_All">
                    <button  className="btn btn-primary" onClick={mapEventHandler} >MAP</button>
                    <Link to="us1/addplace" >
                    <button  className="btn btn-primary"  >ADD PLACE</button>
                    </Link>
                    <Link to="/us1/editplace"> <button className="btn btn-primary"  >Edit</button>
                    </Link>
                </div>
            </div>
        </div>
        </Card>
        </>
    );
}

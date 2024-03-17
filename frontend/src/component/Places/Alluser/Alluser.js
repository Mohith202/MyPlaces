import { useState } from "react";

import Alluser_Placeitem from "./Alluser_placeItem/Alluser_placeItem.js";
// import {mapEventHandler} from "../UserPlaces/UserPlaces.js"

export default function Alluser() {

    const [drawer, setdrawer] = useState(false);

    const mapEventHandler = () => {
        if (drawer === true) {
            setdrawer(false)
        }
        else {
            setdrawer(true)
        }

    };

    const data = [
        {
            id: 125,
            img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
            user: "u1",
            user_image: "https://images.unsplash.com/photo-1705779235077-f301b609cca4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            place: "hyderabad",
            desc: "It is famous for briyani",
            lat: 48,
            long: 52,
            title: "Chair Manir"
        },
        {
            id: 124,
            img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
            user: "u2", 
            user_image: "https://images.unsplash.com/photo-1705779235077-f301b609cca4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            place: "hyderabad",
            desc: "It is famous for briyani Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo impedit, ullam nesciunt blanditiis commodi ab necessitatibus esse vero totam, in tenetur modi facilis at iure temporibus consequuntur ipsum repellendus expedita deserunt odit voluptatibus. Ad voluptas, accusamus id dignissimos sit placeat!" ,
            lat: 484,
            long: 521,
            title: "Chair Manir"
        }
    ]

    return (
        <div className="Alluser" style={{marginTop:"5rem"}} >
            {data.map(item =>{
              return  <  Alluser_Placeitem key={item.id} id={item.id} user_image={item.user_image} user={item.user} title={item.title} desc={item.desc} lat={item.lat} long={item.long} mapEventHandler={mapEventHandler} drawer={drawer} />}
            )}

        </div>
    )
}
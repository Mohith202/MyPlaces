import { useState } from "react";

import Place_item from "../Place_Item/Place_Item.js";


import "./UserPlaces.css";



export default function Userplaces() {


    const data = [
        {
            user: "u2",
            dt: {
                id: "fyghj",
                img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
                user: "u1",
                place: "hyderabad",
                desc: "It is famous for briyani",
                lat: 48,
                long: 52,
                title: "Chair Manir"
            }
        },
        {
            user: "u1",
            dt:
            {
                id: "bb",
                img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",

                place: "hyderabad 1",
                desc: "It is famous its very like for briyani",
                lat: 484,
                long: 521,
                title: "Chair Mandi"
            }
        }
    ]
   



    return (
        <div className="userplaces">
            {data.map((item) => {

               
                return <div className="plcaes" key={item.dt.id} >
                    <Place_item user={item.user} title={item.dt.title} desc={item.dt.desc} lat={item.dt.lat} long={item.dt.long} img={item.dt.img}  />
                </div>
            }
            
            )
            }
        </div>
    )
}
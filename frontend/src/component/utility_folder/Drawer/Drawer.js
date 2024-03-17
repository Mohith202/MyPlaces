import  ReactDOM  from "react-dom";
import React from 'react'



function Drawer(props) {
    
    const content=<div className="drawer" style={{ width: "80%", height: "70%", margin: "auto", display: "block", backgroundColor: "black",zIndex:1000 }}>

        <button onClick={props.click} style={{ height: "30rem",display:"flex",  margin:"auto",background:"yellow" }} >

            <h1   >The latitude is {props.lat} and longitde is {props.long}</h1>
          
        </button>
    </div>
    return ReactDOM.createPortal(content,document.getElementById("navbar_Root"))
}

export default Drawer;
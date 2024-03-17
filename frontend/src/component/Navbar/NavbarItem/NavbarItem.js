import { BrowserRouter as Router, Link, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";

import "./NavbarItem.css";

export default function NavbarItem() {
    const us1=useParams()
    return (
        <nav className="Navbar_item">
           
            <Link to='/'  >
            <li className="Item-Home" >
            Home
            </li>
             </Link>

            <Link to='/${us1}/place'  >
            <li className="Item-Place" >
            Places
            </li>
             </Link>
             <Link to='/Login'  >
            <li className="Item-Auth" >
            Authen
            </li>
             </Link>

             <Link to='/'  >
            <li className="Item-Sign_up" >
            Log out
            </li>
             </Link>
         
         
</nav >
        
    );
}
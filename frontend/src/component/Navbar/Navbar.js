import { createPortal } from "react-dom";
import React from "react";
import ReactDOM from 'react-dom/client';

import NavbarItem from "./NavbarItem/NavbarItem.js";

import './Navbar.css';

export default function Navbar(props) {
   return(
        <header className="navbar" >
            <button className="navbar_button" >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul className="navbar_Item" >
                <NavbarItem>
                </NavbarItem>
            </ul>
        </header>
   );

} 
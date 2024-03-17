import React from 'react';
import Input from "../utility_folder/Input_form/Input.js";
import Button from "../utility_folder/Button/Button.js"


import "./Login.css"

export default function Loginpage(){
    return(
        <>
        <div className="loginpage">
        < Input label={"UserName"} type={"input"}/>
        < Input label={"Password"} type={"input"}/>
        <Button>Login</Button>
        </div>
        <div className='footer_login'>       
            <li>
                <ul>Forget username?</ul>
                 <ul>Froget Password? </ul>
                 </li>
            Click here
        </div>
        </>
    )
}
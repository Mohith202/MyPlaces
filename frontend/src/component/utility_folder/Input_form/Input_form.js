import { useState } from "react"
import "./Input_form.css"

export default function Input(props) {


    const [value,setValue]=useState("")
    const change=(e)=>{
        setValue(e.target.value)
    }

    {
        if (props.type === "textarea") {

            return (
                <div className="input">
                    <label htmlFor="title">{props.label}</label>

                    <textarea type={props.type} onChange={props.titleeventHandler} placeholder={props.placeholder} rows={props.row}  defaultValue={props.value } cols={props.col} size={props.row} />

                </div>)
        }        
        {

            return (
                <div className="input">
                    <label htmlFor="title">{props.label}</label>
                    <input type={props.type} onChange={props.titleeventHandler} placeholder={props.placeholder} rows={props.row} cols={props.col} size={props.row} defaultValue={props.value }  />
                </div>
                    )
           }
    }

}
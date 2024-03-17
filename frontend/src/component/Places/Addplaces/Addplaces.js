import { useReducer } from "react";

import Input from "../../utility_folder/Input_form/Input_form.js";
import Button from "../../utility_folder/Button/Button.js"
import "./NewPlaces.css";

function updateSate(state, action) {
    switch (action.type) {
        case "title":
            return {
                ...state,
                title:action.title,
                complete:action.complete
            }
            case "desc":
            return {
                ...state,
                desc:action.desc,
                complete:action.complete
            }
            case "address":
                return {
                    ...state,
                    address:action.address,
                    complete:action.complete
                }
                default:
                    return{...state}
    }
}

export default function NewPlace(props) {

   
    const [state, Dispatch] = useReducer(updateSate, { title: "", desc: "", address:"",type: "" })


    const UploadDetail = (e) => {
        e.preventDefault()
    
    }
    const titleventHandler=(e)=>{
        Dispatch(
            {
                type:"title",
                title:e.target.value,
                complete :"ok"
            }
            )
            
    }
    const descripeventHandler=(e)=>{
        Dispatch(
            {
                type:"desc",
                desc:e.target.value,
                complete :"ok"
            }
            )
    }

    const addresseventHandler=(e)=>{
        Dispatch(
            {
                type:"address",
                address:e.target.value,
                complete :"ok"
            }
            )
     
    }
    console.log(state)


    return (
        <form className="input_form" onSubmit={UploadDetail}>
            <Input label={"Title"} placeholder={"Enter title here"} type={"title"}titleeventHandler={titleventHandler} value={props.titlevalue} ></Input>

            <Input label={"Description"} placeholder={"Enter description here"} titleeventHandler={descripeventHandler} type={"textarea"} value={props.descvalue} ></Input>

            <Input label={"textarea"} placeholder={"Enter Address here"} type={"textarea"}titleeventHandler={addresseventHandler} row={10} col={5} value={props.addressvalue} ></Input>

            <Button type="submit" className="btn btn-primary">Submit</Button>
        </form>
    )
}
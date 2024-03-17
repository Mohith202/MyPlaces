import "./Button.css";

export default function button(props){
    return(
        <div className="buttonClass">
        <button disabled={props.disabled} type={props.type} >
        {props.children}
        </button>
        </div>
    )
}
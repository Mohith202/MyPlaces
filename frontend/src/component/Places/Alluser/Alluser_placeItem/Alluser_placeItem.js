import "./Alluser_placeItem.css";

export default function Alluser_placeItem(props) {
    return (
        <div className="userItem">
            <div className="user_image">
                <img className="userProfile" src={props.user_image} alt="No Image" />
                <h4>{props.user}</h4> 
                </div>
            <div className="userInfo">
                <h3>{props.title}</h3>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}
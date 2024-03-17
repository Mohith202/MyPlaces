import {memo} from "react";

import "./card.css";

const card=(props) =>{
    return(
        <div className="card_layout">
        {
            props.children
        }
        </div>
    );
}
export default memo(card);
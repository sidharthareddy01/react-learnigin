import React from "react";
import './UserInput.css';


const input = (props)=>{
    return (
        <div className="input">
            <input type="text" onChange={props.changeUser} value={props.name}/>
        </div>
    );
};

export default input;
import React from 'react';
import './UserOutput.css';


const output = (props)=>{
    return (
        <div className="output">
            <p style={props.style3}>Hello {props.name}, Good Evening..</p>
            <p>Enjoy the tutorial. </p>
        </div>
    );
}

export default output;
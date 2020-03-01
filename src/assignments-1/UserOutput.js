import React from 'react';
import './UserStyle.css'

const userOutput = (props) => {
    const divStyle = {
        backgroundColor: 'red'
    }

    return (
        <div>
            <div className="color">
                <p>My name is {props.name}</p>
            </div>
            <div style={divStyle}>
                Welcom to my channel
            </div> 
        </div>
    );
}

export default userOutput;
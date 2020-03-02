import React from 'react';

const Validation = (props) => {
    let alertMessage;

    if (props.textLength) {
        alertMessage = (
            <div>
                {props.textLength >3 ? <p>Text long enough</p> : <p>Text too short</p>}
            </div>
        );
    } 
    else {
        alertMessage = (<p>Please enter the text!</p>)
    }

    return (
        <div>
            {alertMessage}
            <br/>
            <p>Assignment 2</p>
        </div>
    )
}

export default Validation;
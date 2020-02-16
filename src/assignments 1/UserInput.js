import React from 'react';

const userInput = (props) => {
    return (
        <div>
            <input
                type="text" 
                value={props.name} 
                onChange={props.changed} />
            <div>
                <button onClick={props.click}>Change name to Handsome</button>
            </div>
        </div>
        
    )
}

export default userInput;
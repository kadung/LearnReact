import React from 'react'

const CharList = (props) => {
    const style = {
        display: 'inline',
        width: '100px',
        height: '100px',
        padding: '10px',
        border: '1px solid blue',
        marginRight: '10px'
    }

    const chars = props.text.split('');
    const charsList = chars.map((char, index) =>
        <span 
          style={style} 
          key={char+index}
          onClick={() => props.deleted(index)}>
            {char}
        </span>
    )

    
    
    return (
        <div> 
            {charsList}
        </div>      
    )
}

export default CharList;
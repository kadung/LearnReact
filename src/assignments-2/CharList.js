import React from 'react'

const CharList = (props) => {
    const style = {
        display: 'inline',
        width: '100px',
        height: '100px',
        padding: '10px',
        border: '1px solid blue',
        'margin-right': '10px'
    }

    const text = props.text;
    const listChar = text.map((char) => {
        <span style={style}>
            {char}
        </span>
    })

    return ({listChar})
}

export default CharList;
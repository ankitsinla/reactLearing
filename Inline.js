import React from 'react'
 
const heading ={                //must be camelCased
    fontSize :'72px',
    color:'blue'
}

function Inline() {
    return(
        <div style={heading}>Inline</div>
    )
}

export default Inline
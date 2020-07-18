import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log("button clicked")
    }
    return(  //do not put () after clickhandler otherwise it will be function call
        <div>
            <button onClick={clickHandler}>click</button> 
        </div>
    )
}

export default FunctionClick
import React from 'react'

// function Greet(){
//     return <h1>hello ankit</h1>
// }

const Greet = (props) => {              //<Greet name="ankit" hero="superman"><p>class prop</p></Greet>
    return (                            //return only one element
        <div>                           
            <h1>hello {props.name} is {props.hero}</h1>
            {props.children}            //things within blocks
        </div>
    )
}

export default Greet
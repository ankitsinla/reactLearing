import React from 'react'
import Welcome from './welcome'

const Hello = () => {
    // return (                     with JSX
    //     <div id ="demoid" className="dummyClass">
    //         <h2>Hello ankit</h2>
    //     </div>
    // )

    return React.createElement('div',    //without JSX
        {id:"demoid", className:'dummyClass'},
        React.createElement('h2',null,'hello ankit') 
    )
}

export default Hello
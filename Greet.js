import React from 'react'

// function Greet(){
//     return <h1>hello ankit</h1>
// }

// const Greet = ({name, hero}) => {              //Destructuring props
//     return (                            //return only one element
//         <div>                           
//             <h1>hello {name} is {hero}</h1>
//         </div>
//     )
// }

const Greet = props => {             //Destructuring props within function
    const {name,hero} = props
    return (                            //return only one element
        <div>                           
            <h1>hello {name} is {hero}</h1>
        </div>
    )
}

export default Greet
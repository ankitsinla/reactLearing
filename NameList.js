import React from 'react'

function NameList(){
    const names=['ankit','amit','jabsa ']
    const name = names.map((name,index) => <h2 key={index}> {index} {name}</h2>)
    return <div>{name}</div>
}

export default NameList
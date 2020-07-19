import React from 'react'

function NameList(){
    const names=['ankit','amit','jabsa ']
    const name = names.map(name => <h2>{name}</h2>)
    return <div>{name}</div>
}

export default NameList
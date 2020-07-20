import React from 'react'

function Column() {
    return(
        <React.Fragment>                    //Fragment in place of div as div may cause error sometime 
            <td>name</td>
            <td>Ankit</td>
        </React.Fragment>
    )
}

export default Column

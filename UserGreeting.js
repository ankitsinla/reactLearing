import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(){
        super()

        this.state = {
            isLoggedIn :true
        }
    }

    render() {
        // if(this.state.isLoggedIn){                           //method-1 If -else cond
        //     return  <div>welcome ankit</div>  
        // }else{
        //     return  <div>welcome guest</div>
        // }
        // return(
        //     <div>
        //         <div>welcome guest</div>
        //         <div>Welcome Ankit</div>
        //     </div>
        // )

        // let message                                  //Method-2 Element variable approach
        // if(this.state.isLoggedIn){
        //     message= <div>welcome ankit</div>
        // } else {
        //     message= <div>welcome guest</div>
        // }
        // return <div>{message}</div>

        // return(                                         //Method-3 Terniary conditional approach
        //     this.state.isLoggedIn?
        //     <div>welcome ankit</div> :
        //     <div>welcome guest</div>
        // )


        return this.state.isLoggedIn && <div>welcome ankit</div> //met-4 short circuit is LHS is true then RHS is run otherwise nothing runs
    }
}

export default UserGreeting
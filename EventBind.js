import React, {Component} from 'react'

class EventBind extends Component {
    constructor(){
        super()
        this.state ={
            message :"clicked"
        }

        // this.clickHandler = this.clickHandler.bind(this)  //third aproach 
    }

    // clickHandler(){
    //     this.setState({
    //         message:"Goodbye"
    //     })
    // }

    clickHandler =() => {           //fourth approach -- class property as arrow function
        this.setState({
            message:'Goodbye'
        })
    }

    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}  // first approach
                {/* <button onClick={() => this.clickHandler()}>click</button>    */}  //second -- () is needed
                <button onClick={ this.clickHandler}>click</button>                    //third -- have to use line in constructor
            </div>
        )
    }
}

export default EventBind
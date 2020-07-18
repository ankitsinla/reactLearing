import React, { Component} from 'react'

class Message extends Component{
    constructor() {
        super()
        this.state ={
            message:"Welcome Visitor"
        }
    }

    changeMessage() {
        this.setState({
            message:'Thank you visitor'
        })
    }
    render(){
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={() => this.changeMessage()}>subscribe</button>
            </div>
        )
    }
}

export default Message
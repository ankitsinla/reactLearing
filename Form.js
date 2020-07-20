import React, { Component } from 'react'

class Form extends Component {
    constructor(){
        super()

        this.state= {
            username:'',
            comments:'',
            topic:'react'
        }
    }

    handleUsernameChange =(event)=> {
        this.setState({
            username:event.target.value
        })
    }

    handleCommentChange = (event) => {
        this.setState({
            comments:event.target.value
        })
    }

    handleTopicChange = (event)=>{
        this.setState({
            topic:event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()                      //prevents refresh of page after alert message

    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>     
                <div>
                    <label>username</label>
                    <input type='text' value={this.state.username} onChange={this.handleUsernameChange}/>
                </div>
                <div>
                    <label>comments</label>
                    <textarea value={this.state.comments} onChange={this.handleCommentChange}></textarea>
                </div>
                <div>
                    <label>topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option>react</option>
                        <option>angular</option>
                        <option>alue</option>
                    </select>
                </div>
                <button type='submit' >Submit</button>
            </form>
        )
    }
}

export default Form
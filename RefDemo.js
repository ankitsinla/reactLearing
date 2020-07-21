import React, { Component } from 'react'

class RefDemo extends Component{
    constructor(props){
        super(props)
        this.inputRef = React.createRef()   //first method
        this.cbRef = null                   //second method call back ref approach
        this.setCbRef = element => {
            this.cbRef =element
        }
    }

    componentDidMount() {
        // this.inputRef.current.focus()       //set focus to input when page loads
        // console.log(this.inputRef)

        if(this.cbRef){
            this.cbRef.focus()
        }
    }
    
    clickHandler= () => {
        alert(this.inputRef.current.value)
    }

    render(){
        return(
            <div>
                <input type='text'ref={this.inputRef} ></input>
                <input type='text'ref={this.setCbRef} ></input>
                <button onClick={this.clickHandler}>click</button>
            </div>
        )
    }
}

export default RefDemo
import React,{Component} from 'react'

class ClassClick extends Component {  // dont add () to clickHandler function
    clickHandler(){
        console.log("button is clicked in class")
    }
    render() {
        return(
            <div>
                <button onClick ={this.clickHandler}>click me</button>
            </div>
        )
    }
}

export default ClassClick
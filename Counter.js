import React, { Component} from 'react'

class Counter extends Component{
    constructor() {
        super()
        this.state ={
           count:0
        }
    }

    Increment() {       //whenever have to use code after setState do not use outsidee setState , use inside setState
        //this.setState(
        //     {
        //         count:this.state.count + 1
        //     },
        //     ()=> {
        //         console.log('Callbakc value:',this.state.count)
        //     }
        // )
        // console.log(this.state.count) //one less than upper count value becoz it is unsyncronize

        this.setState((prevState) => ({   // when update state based on prevstate user prevState()
            count:prevState.count + 1 
        }))
    }

    IncrementFive(){
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
    }

    render(){
        return (
            <div>
                <h2>Count - {this.state.count}</h2>
                <button onClick={() => this.IncrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello!"
      }
      // this.clickHandler=this.clickHandler.bind(this)
    }
    // clickHandler(){
    //     this.setState({
    //         message:"Goodbye"
    //     })
    // }

    // Method with arrow function:

    clickHandler = () =>{
        this.setState({
            message : "Hey Mahi"
        })
    }
    
  render() {
    return (
      <div>{this.state.message}
    {/* Binding in Render Method: */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button>  */}
    {/* Binding using Parathesis    -Easy */}
        {/* <button onClick ={()=> this.clickHandler()}>Click</button> */}
    {/* Binding in the constructor (BEST OPTION TO USE) or Class property as arrow function*/}
        <button onClick={this.clickHandler}>Click Me !</button>
      </div>
    )
  }
}

export default EventBind

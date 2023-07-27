import React, { Component } from 'react'

 class ClassClickl extends Component {

    clickHandler(){
        console.log("button Is clicked")
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me!</button>
      </div>
    )
  }
}

export default ClassClickl

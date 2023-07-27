// CONDITIONAL RENDERING :


import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : false
      }
      console.log(`isLoggedIn :  ${this.state.isLoggedIn}`)
    //   this.Authorize=this.Authorize.bind(this)
    }
    Authorize=()=>{
        this.setState({
            isLoggedIn:true
            
        },()=>
        console.log(`isLoggedIn :  ${this.state.isLoggedIn}`)
        )
    
    }
    
  render() {
    // SHORT CIRCUIT OPERATOR
    // return(
    //     this.state.isLoggedIn && <div>Hai Mahi</div>
    // )
    // CONDITIONAL RENDERING WITH A VARIABLE
    let msg
    if (this.state.isLoggedIn){
        msg=<div>Hai Maharaja</div>
    }
    else {
       msg= <div>
        
           <div> Welcome Guest You are not authorized to enter </div>
            <button onClick={this.Authorize}>Click to Authorize</button>    
        </div>
    }
    return <div>{msg}</div>
    


    // TERNARY OPERATOR

    // return this.state.isLoggedIn ? ( 
    // <div>Welcome Maharaja </div>)
    // :
    // (
    // <div>
    //         <div>Welcome Guest You are not authorized to enter</div>
    //         <button onClick={this.Authorize}>Click to Authorize</button>
    // </div>
    // )


// IF/ELSE
    //   if (this.state.isLoggedIn){
    //   return(
    //     <div>
    //         Welcome Maharaja 
    //     </div>)
    //   }
    //   else{
    //   return(
    //     <div>
    //     <div>Welcome Guest You are not authorized to enter</div>
    //     <button onClick={this.Authorize}>Click to Authorize</button>
    //     </div>
    //   )

  }

}
export default UserGreeting

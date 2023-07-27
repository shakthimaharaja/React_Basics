import React,{Component} from "react";

class Message extends Component {
    constructor(){
        super()
        this.state={
            message:"Hey Welcome to Atlanta"
        }
    }
    changeMessage(){
        this.setState(
            {
            message:"You got an accomodation in DUNWOODY"
            }
        )
    }
    render(){
        return(
            <div>
                <h4>
                    {this.state.message}
                </h4>
                <button onClick={() => this.changeMessage()}>Find me a accommodation</button>
            </div>
            
        )
    }
}

export default Message;
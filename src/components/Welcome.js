// Class Component
import React,{Component} from "react";

class Welcome extends Component{
    render(){
        return <h1>Welcome {this.props.name}, And your talent is {this.props.Talent}</h1>
    }
}

export default Welcome
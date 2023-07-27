import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import React,{ Component } from 'react';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClickl from './components/ClassClickl';
import EventBind from './components/EventBind';
import ChildComponent from './components/ChildComponent';
import ParentComponent from './components/ParentComponent';



class App extends Component {
  render(){
  return (
    <div className="App">
      <ParentComponent />
      {/* <ChildComponent /> */}
      {/* <EventBind /> */}
      {/* <ClassClickl /> */}
      {/* <FunctionClick /> */}
      {/* <Counter />
      <Greet name="Mahi" Gender="Male">
      <h1 style={{color:'red'}}>and also he is a Hero</h1>
      </Greet>
      <Greet name="Yuktha" Gender="Female"/>
      <h1><button style={{color:'green'}}> is a hero too</button></h1>
      <Greet name="Anchu" Gender="Male"/> 
      <Welcome name="Maharaja" Talent='Dancing'/>
      <Welcome name="Sivasubramanian" Talent='Coding'/>
      <Hello name = "Maharaja"/> 
      <Message place="Atlanta" locality="SandySprings"/> */}
    </div>
  );
}
}

export default App;

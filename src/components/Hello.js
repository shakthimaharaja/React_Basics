// functional component JSX vs No JSX
import React from "react";

const Hello = () =>
{
    // // with jsx
    // return(
    //     <div classname ='dummyClass'>
    //         <h1>Hello Maharaja</h1>
    //     </div>
    // )
    return React.createElement(
        'div', 
        {id:1 , className :'dummyClass'} , 
        React.createElement('h1',{id:'style'},'Hey Mahi'))
}

export default Hello

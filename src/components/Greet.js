// Functional Component
import React from 'react';

// function Greet() {
//     return <h1>Hello Maharaja</h1>
// }
// export default Greet
// ES6=> ARROW SYNTAX:
const Greet = props => {
    console.log(props.name)
    return(
        <div>
    < h1>Hello {props.name} is a {props.Gender}</h1>
    {props.children}
        </div>
    )
}
export default Greet


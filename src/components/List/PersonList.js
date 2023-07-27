import React from 'react'
import Person from './Person'

function PersonList() {
    const names=['ram','raj','reka']
    const List=[
        {
            id:1,
            name:'Maharaja',
            gender:'Male'
        },
        {
            id:2,
            name:'Bala',
            gender:'Male'
        },
        {
            id:3,
            name:'Krithika',
            gender:'Female'
        }
    ]
    
    // MAP FUNCTION FOR LIST
    // const nameList = List.map(person =><Person key={person.id}  person={person}/>)

        const nameList = names.map((fname,index) =><h2 key={index}>No : {index} <br></br>Name : {fname}</h2>)
    return (
    <div>
      {
        nameList
      }

    </div>
  )
}

export default PersonList

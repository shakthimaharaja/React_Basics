import React from 'react'

function Person({person}) {
  return (
    <div>
        <h2>My id is {person.id} , Iam {person.name} and my gender is {person.gender}</h2>
    </div>
  )
}

export default Person

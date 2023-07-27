import React from 'react'
import myStyle from './Css/myStyle.css'

function StyleSheets(props) {
    let value = props.primary ? 'primary' : 'secondary'
  return (
    <div>
      <h3 className={value}>Hai Maharaja</h3>
    </div>
  )
}

export default StyleSheets

import React from 'react'
import './ClearBtn.css'

function ClearBtn(props) {
  return (
    <div>
        <button id='clear-btn' onClick={props.clearFunc}>Reset</button>
    </div>
  )
}

export default ClearBtn
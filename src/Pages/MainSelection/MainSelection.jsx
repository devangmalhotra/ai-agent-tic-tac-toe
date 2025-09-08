import React from 'react'
import Title from '../../Components/Title/Title'
import GameSettings from '../../Components/GameSettings/GameSettings'
import './MainSelection.css'

function MainSelection() {
  return (
    <div id='title-form-container'>
      <Title />
      <GameSettings />
    </div>
  )
}

export default MainSelection
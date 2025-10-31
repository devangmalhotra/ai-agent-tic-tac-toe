import React from 'react'
import Title from '../../Components/Title/Title'
import GameSettings from '../../Components/GameSettings/GameSettings'
import './MainSelection.css'
import UserStats from '../../Components/userStats/userStats'

function MainSelection() {
  return (
    <div id='title-form-container'>
      <Title />
      <UserStats />
      <GameSettings />
    </div>
  )
}

export default MainSelection
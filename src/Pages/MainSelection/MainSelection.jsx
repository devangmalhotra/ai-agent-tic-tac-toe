import React from 'react'
import Title from '../../Components/Title/Title'
import GameSettings from '../../Components/GameSettings/GameSettings'
import './MainSelection.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function MainSelection() {
  let navigate = useNavigate();



  return (
    <div id='title-form-container'>
      <Title />
      <GameSettings />
    </div>
  )
}

export default MainSelection
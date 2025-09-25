import React from 'react'
import Title from '../../Components/Title/Title'
import GameBoard from '../../Components/GameBoard/GameBoard'
import ClearBtn from '../../Components/ClearBtn/ClearBtn'

function GamePage() {
  return (
    <div>
      <Title />
      <ClearBtn />
      <GameBoard />
    </div>
  )
}

export default GamePage
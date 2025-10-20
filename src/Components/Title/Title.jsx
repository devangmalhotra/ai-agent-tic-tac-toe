import React from 'react'
import './Title.css'
import { useSearchParams } from 'react-router-dom';

function Title() {
  const [searchParams, setSearchParams] = useSearchParams();
  let algoType;

  if (searchParams.get('algo-type') == 'miniMax') {
    algoType = 'Minimax'
  } else if (searchParams.get('algo-type') == 'alphaBetaPruning') {
    algoType = 'Alpha-beta Pruning'
  } else if (searchParams.get('algo-type') == 'expectiMiniMax') {
    algoType = 'Expectiminimax'
  }

  return (
    <div id='title-container'>
        <h1>Tic-Tac-Toe</h1>
        <h4 className={algoType === null ? 'hidden' : ''}>A.I. Algorithm: {algoType}</h4>
    </div>
  )
}

export default Title
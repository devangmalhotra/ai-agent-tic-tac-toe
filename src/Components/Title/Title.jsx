import React from 'react'
import './Title.css'
import { useSearchParams } from 'react-router-dom';

function Title() {
  const [searchParams, setSearchParams] = useSearchParams();
  const algoType = searchParams.get('algo-type');

  return (
    <div id='title-container'>
        <h1>Tic-Tac-Toe</h1>
        <h4>AI Algorithm: {algoType}</h4>
    </div>
  )
}

export default Title
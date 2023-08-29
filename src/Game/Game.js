import React, { useState } from 'react'
import Board from '../Board/Board';
function Game() {
    const[turn,setTurn]=useState(1)

    return (
        <div>

           
            <Board turn={turn} setTurn={setTurn}/>
        </div>
  )
}

export default Game;
import React, { useEffect } from 'react'
import generateBoard from "./Generateboard"
import "./Board.css"
import { useState } from 'react';
import { handlePawnmovement } from '../Valid/Pawn/PawnMovement';
function Board() {
    //board
    const [board,setBoard]=useState([])
    //what white captures
    const [whitetakes,setwhitetakes]=useState([])
    //what black captures
    const [blacktakes, setblacktakes] = useState([])
    //what move is being done
    const [current, setcurrent] = useState([]);

    //moving from where to where
    function reveal(x,y){
        setcurrent(prevCurrent => 
            prevCurrent.length>=2 ?
            [ { i: x, j: y }]:
        [...prevCurrent, { i: x, j: y }]
    )
    
}
    //handle pawn movement
    useEffect(() => {
        //need checks to see it is a pawn,rook,etc, and whose turn it is and whether theyve picked the right peice.
        handlePawnmovement(board, current, setBoard, setcurrent, setwhitetakes, setblacktakes)
    }
,[board,current])
    //console.log(whitetakes)

    //create board
    useEffect(() => {
        const newb = generateBoard(reveal);
        setBoard(newb)
    }, []);

   

    

    return (
        <div className='center-board'>
            <div className='taken-peices'>
                Black: 
                {blacktakes}

            </div>
           {board.map((row,rowid)=> (
           <div className='row-board' key={rowid}>{row}</div>
           ))}
           
            <div className='taken-peices'> 
            White:
                {whitetakes}

            </div>

        </div>
    )
}

export default Board
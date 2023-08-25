import React, { useEffect } from 'react'
import generateBoard from "./Generateboard"
import "./Board.css"
import { useState } from 'react';
import { handlePawnmovement } from '../Valid/Pawn/PawnMovement';
import PawnVisualizer from '../visualizer/pawns/Pawnvisualize';
function Board({turn,setTurn}) {
    //board
    const [board,setBoard]=useState([])
    //what white captures
    const [whitetakes,setwhitetakes]=useState([])
    //what black captures
    const [blacktakes, setblacktakes] = useState([])
    //what move is being done
    const [current, setcurrent] = useState([]);
    //VIS PAW
    const [showPawnVisualizer, setShowPawnVisualizer] = useState(false);
    //moving from where to where
    function reveal(x,y){
        setcurrent(prevCurrent => 
            prevCurrent.length>=2 ?
            [ { i: x, j: y }]:
        [...prevCurrent, { i: x, j: y }]
    )
    
}
    useEffect(() => {
        if (current.length === 1) {
            let first = current[0];
            console.log(board[first.i][first.j].props.piece)

            if (board[first.i][first.j].props.piece === '\u2659' || board[first.i][first.j].props.piece === '\u265F') {
                setShowPawnVisualizer(true);
            } else {
                setShowPawnVisualizer(false);
            }
        } else {
            setShowPawnVisualizer(false);
        }
    }, [board, current]);
  
    //handle pawn movement
    useEffect(() => {
        //need checks to see it is a pawn,rook,etc, and whose turn it is and whether theyve picked the right peice.
        
        handlePawnmovement(board, current, setBoard, setcurrent, setwhitetakes, setblacktakes,turn,setTurn)
    }
,[board,current])
    //console.log(whitetakes)

    //create board
    useEffect(() => {
        const newb = generateBoard(reveal);
        setBoard(newb)
    }, []);

   

    console.log('viz',showPawnVisualizer)

    return (
        <div className='center-board'>
            Whose Turn: {turn}
            <div className='taken-peices'>
                Black: 
                {blacktakes}

            </div>
            <div  className="board-container">
                {board.map((row, rowid) => (
                    <div className='row-board' key={rowid}>{row}</div>

                ))}
                {showPawnVisualizer && <PawnVisualizer board={board} first={current[0]} setShowPawnVisualizer={setShowPawnVisualizer} />}

            </div>
          
           
            <div className='taken-peices'> 
            White:
                {whitetakes}

            </div>

        </div>
    )
}

export default Board
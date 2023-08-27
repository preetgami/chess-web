import React, { useEffect } from 'react'
import generateBoard from "./Generateboard"
import "./Board.css"
import { useState } from 'react';
import { handlePawnmovement } from '../Valid/Pawn/PawnMovement';
import { handleRookmovement } from '../Valid/Rook/handlerookmovement';
import { handleBishopmovement } from '../Valid/Bishop/handlebishopmovement';
import PawnVisualizer from '../visualizer/pawns/Pawnvisualize';
import { handleKnightmovement } from '../Valid/Knight/handleKnightmovement';
import { handleQueenmovement } from '../Valid/Queen/handlequeen';
import { handleKingmovement } from '../Valid/king/handlekingmovement';
import { isyourkingincheck } from"../Valid/kingcheck";

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


    //currentking pos white
    const[currentwhiteking,setcurrentwhiteking]=useState([7,4])
    //cureentking pos black
    const [currentblackking, setcurrentblackking] = useState([0,4])

    //winner
    //pawn update at end


    //done
    //castling
    //king and queen side

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
  
    //handle movement
    //bishop
    //console.log(currentblackking,currentwhiteking)
    console.log(board)
    useEffect(() => {
        //need checks to see it is a pawn,rook,etc, and whose turn it is and whether theyve picked the right peice.
        if (current.length === 2) {
            let first = current[0];
            console.log(board[first.i][first.j].props.piece)
            let yourcolor= turn==1 ? "white" :"black"

            //if your king is in check you have to move it out
           
                console.log("notnotnotnotnotnotnotnot in check ")
                
                //pawn
                if (board[first.i][first.j].props.piece === '\u2659' || board[first.i][first.j].props.piece === '\u265F') {
                    console.log("In")
                    handlePawnmovement(board, current, setBoard, setcurrent, setwhitetakes, setblacktakes, turn, setTurn, isyourkingincheck, currentblackking, currentwhiteking)
                }
                //rook
                else if (board[first.i][first.j].props.piece === '\u265C' || board[first.i][first.j].props.piece === '\u2656'){
                    //console.log(current[0].i, current[0].j)

                    handleRookmovement(board, current, setBoard, setcurrent, setwhitetakes, setblacktakes, turn, setTurn, isyourkingincheck, currentblackking, currentwhiteking)

                }
                //bishop
                else if (board[first.i][first.j].props.piece === '\u2657' || board[first.i][first.j].props.piece === '\u265D') {
                    //console.log(current[0].i, current[0].j)
                    //done kingcheck
                    handleBishopmovement(board, current, setBoard, setcurrent, setwhitetakes, setblacktakes, turn, setTurn, isyourkingincheck,currentblackking,currentwhiteking)

                }
                //knight
                else if (board[first.i][first.j].props.piece === '\u2658' || board[first.i][first.j].props.piece === '\u265E') {
                    //console.log(current[0].i, current[0].j)

                    handleKnightmovement(board, current, setBoard, setcurrent, setwhitetakes, setblacktakes, turn, setTurn, isyourkingincheck, currentblackking, currentwhiteking)

                }
                //queen
                else if (board[first.i][first.j].props.piece === '\u2655' || board[first.i][first.j].props.piece === '\u265B') {
                    //console.log(current[0].i, current[0].j)

                    handleQueenmovement(board, current, setBoard, setcurrent, setwhitetakes, setblacktakes, turn, setTurn, isyourkingincheck, currentblackking, currentwhiteking)

                }
                //king
                else if (board[first.i][first.j].props.piece === '\u2654' || board[first.i][first.j].props.piece === '\u265A') {
                    //console.log(current[0].i, current[0].j)

                    handleKingmovement(board, current, setBoard, setcurrent, setwhitetakes, setblacktakes, turn, setTurn, isyourkingincheck, setcurrentblackking, setcurrentwhiteking,currentblackking, currentwhiteking)

                }
            

    }}
,[board,current])
    //console.log(whitetakes)

    //create board
    useEffect(() => {
        const newb = generateBoard(reveal);
        setBoard(newb)
    }, []);

   

    //console.log('viz',showPawnVisualizer)

    return (
        <div className='center-board'>
            Whose Turn: {turn}
            <div className='taken-peices'>
                Black: 
                {blacktakes}

            </div>
            {showPawnVisualizer && <PawnVisualizer board={board} first={current[0]} setShowPawnVisualizer={setShowPawnVisualizer} />}

            <div  className="board-container">
                {board.map((row, rowid) => (
                    <div className='row-board' key={rowid}>{row}</div>

                ))}

            </div>
          
           
            <div className='taken-peices'> 
            White:
                {whitetakes}

            </div>

        </div>
    )
}

export default Board
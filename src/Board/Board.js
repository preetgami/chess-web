import React, { useEffect } from 'react'
import generateBoard from "./Generateboard"
import "./Board.css"
import { useState } from 'react';
import { handlePawnmovement } from '../Valid/Pawn/PawnMovement';
import { handleRookmovement } from '../Valid/Rook/handlerookmovement';
import { handleBishopmovement } from '../Valid/Bishop/handlebishopmovement';
import { handleKnightmovement } from '../Valid/Knight/handleKnightmovement';
import { handleQueenmovement } from '../Valid/Queen/handlequeen';
import { handleKingmovement } from '../Valid/king/handlekingmovement';
import { isyourkingincheck } from"../Valid/kingcheck";
import { checkwinner } from '../winner/checkwinner';
import { vizualizeoff } from '../visualizer/vizualizeoff';
import { visualizeon } from '../visualizer/vizualizeon';

import  Pawn  from '../Valid/Pawn/Pawn';
import Rook from '../Valid/Rook/rook';
import Bishop from '../Valid/Bishop/Bishop';
import Knight from '../Valid/Knight/Knight';
import King from '../Valid/king/King';
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


    //currentking pos white
    const[currentwhiteking,setcurrentwhiteking]=useState([7,4])
    //cureentking pos black
    const [currentblackking, setcurrentblackking] = useState([0,4])

    const [winner,setwinner]=useState(false)
    //winner
    const [content, setContent] = useState(null);

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
    
  
    //handle movement
    //bishop
    //console.log(currentblackking,currentwhiteking)
    console.log(board)
    useEffect(() => {
        //need checks to see it is a pawn,rook,etc, and whose turn it is and whether theyve picked the right peice.
        if (current.length === 2) {
            let first = current[0];
            console.log(board[first.i][first.j].props.piece)
            console.log(board[first.i][first.j].props.piece)
            if (board[first.i][first.j].props.piece != null) {
                vizualizeoff(board,setBoard)
            }
            let yourcolor= turn==1 ? "white" :"black"

            //if your king is in check you have to move it out
           
                //check if possible to move out of this pos
                

            
                
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


    useEffect(() => {
        if (current.length === 1) {
            let first = current[0];
            let yourcolor = turn == 1 ? "white" : "black"

            console.log(board[first.i][first.j].props.piece)
            if (board[first.i][first.j].props.piece != null) {
                if (board[first.i][first.j].props.side==yourcolor){
                visualizeon(first, board, setBoard, isyourkingincheck, Pawn, yourcolor, currentblackking, currentwhiteking,Rook,Bishop,Knight,King) 

                }
            }
        }
    }, [ current]);
    useEffect(()=>{
        if (current.length === 2) {
            let first = current[0];
            console.log(board[first.i][first.j].props.piece)
            let yourcolor = turn == 1 ? "white" : "black"
            console.log(board,"winnner checkeerrrr123123")
            if(isyourkingincheck(board, yourcolor, currentblackking, currentwhiteking)){
                if (checkwinner(board, isyourkingincheck, currentblackking, currentwhiteking, yourcolor)) {
                    let wincolor = yourcolor == "white" ? "black" : "white"
                    setwinner(true)
                    setContent(<div className='winner'>Check mate : {wincolor} wins</div>); 
                    console.log("winnerrrrr " + wincolor)

                }
    }
    }}, [current,board,turn])
    console.log(winner,"wineer111",content)

    let wincolor = turn==1 ? "black" : "white"

    //console.log('viz',showPawnVisualizer)

    return (
        <div className='center-board'>
            {content}
            Whose Turn: {turn}
            <div className='taken-peices'>
                Black: 
                {blacktakes}

            </div>

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
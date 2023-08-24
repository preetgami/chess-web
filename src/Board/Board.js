import React, { useEffect } from 'react'
import Box from "../Box/Box"
import "./Board.css"
import { useState } from 'react';
import Pawn from "../Valid/Pawn"

function Board() {
    const [board,setBoard]=useState([])
 
    const [current, setcurrent] = useState([]);
    function reveal(x,y){
        setcurrent(prevCurrent => 
            prevCurrent.length>=2 ?
            [ { i: x, j: y }]:
        [...prevCurrent, { i: x, j: y }]
    )
    
}
    useEffect(() => {
    if (current.length === 2) {
        const updatedBoard = [...board];

        let first = current[0];
        let last = current[1];
        //console.log(first.i === last.i && first.j === last.j , "frist-last")

        if (!(first.i === last.i && first.j === last.j)){
            //console.log(board[last.i][last.j], "frist")
            let goingtopeice = board[last.i][last.j].props.piece

            //check if is a white pawn
            //check valid pawn movement
            if (board[first.i][first.j].props.piece ==="\u2659"){
                console.log(Pawn(first, last, 6),"white")
                console.log(goingtopeice)
                if (Pawn(first, last, 6, goingtopeice) ){

                    //case when enpassent
                    if (first.j!==last.j){
                        const updatedElement = React.cloneElement(board[last.i][last.j], {
                            ...board[last.i][last.j].props,
                            piece: board[first.i][first.j].props.piece
                        })
                        const updatedElement2 = React.cloneElement(board[first.i][first.j], {
                            ...board[first.i][first.j].props,
                            piece: null
                        })
                        const updatedElement3 = React.cloneElement(board[first.i][last.j], {
                            ...board[first.i][last.j].props,
                            piece: null
                        })

                        board[last.i][last.j] = updatedElement;
                        board[first.i][first.j] = updatedElement2;
                        board[first.i][last.j] = updatedElement3;

                    }
                    else{
                    const updatedElement = React.cloneElement(board[last.i][last.j], {
                        ...board[last.i][last.j].props,
                        piece: board[first.i][first.j].props.piece
                    })
                    const updatedElement2 = React.cloneElement(board[first.i][first.j], {
                        ...board[first.i][first.j].props,
                        piece: null
                    })
                    board[last.i][last.j] = updatedElement;
                    board[first.i][first.j] = updatedElement2;
                }
                    setBoard(updatedBoard);
                    setcurrent([]);
                }


            }
            if (board[first.i][first.j].props.piece === "\u265F") {
                console.log(Pawn(first, last, 1, goingtopeice),"black")
                if (Pawn(first, last, 1,goingtopeice)) {
                    if (first.j !== last.j) {
                        const updatedElement = React.cloneElement(board[last.i][last.j], {
                            ...board[last.i][last.j].props,
                            piece: board[first.i][first.j].props.piece
                        })
                        const updatedElement2 = React.cloneElement(board[first.i][first.j], {
                            ...board[first.i][first.j].props,
                            piece: null
                        })
                        const updatedElement3 = React.cloneElement(board[first.i][last.j], {
                            ...board[first.i][last.j].props,
                            piece: null
                        })

                        board[last.i][last.j] = updatedElement;
                        board[first.i][first.j] = updatedElement2;
                        board[first.i][last.j] = updatedElement3;

                    }else{
                    const updatedElement = React.cloneElement(board[last.i][last.j], {
                        ...board[last.i][last.j].props,
                        piece: board[first.i][first.j].props.piece
                    })
                    const updatedElement2 = React.cloneElement(board[first.i][first.j], {
                        ...board[first.i][first.j].props,
                        piece: null
                    })
                    board[last.i][last.j] = updatedElement;
                    board[first.i][first.j] = updatedElement2;
                }
                    setBoard(updatedBoard);
                    setcurrent([]);
                }


            }
            
        }
        //console.log((localStorage.getItem('white_2_pawn')),"w");
        //console.log((localStorage.getItem('black_2_pawn')), "b");


    }
},[board,current])
    console.log(current)


    useEffect(() => {
        generateBoard();
        return
    }, []);

    function generateBoard(){
        const newB=[]
    for (let i = 0; i < 8; i++) {
        let x = [];
        for (let j = 0; j < 8; j++) {
            if (i===1){
                x.push(<Box key={i + j} i={i} j={j} empty={false} piece={'\u265F'}  reveal={reveal} side={"black"}/>)
            }
            else if( i===6){
                x.push(<Box key={i + j} i={i} j={j} empty={false} piece={'\u2659'} reveal={reveal} side={"white"} />)

            }
            else{
                x.push(<Box key={i + j} i={i} j={j} empty={true} piece={null} reveal={reveal} side={null} />)

            }
        }

        newB.push(x)

    }
    setBoard(newB);
}
    

    return (
        <div className='center-board'>
            
           {board.map((row,rowid)=> (
           <div className='row-board' key={rowid}>{row}</div>
           ))}
           



        </div>
    )
}

export default Board
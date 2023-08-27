
import Bishop from "./Bishop";
import React from "react";

export function handleBishopmovement(board, current, setBoard, setcurrent, setwhitetakes, setblacktakes, turn, setTurn, isyourkingincheck,currentblackking,currentwhiteking) {
    if (current.length === 2) {
        const updatedBoard = board.map(row => [...row]);

        let first = current[0];
        let last = current[1];



        if (!(first.i === last.i && first.j === last.j)) {
            //console.log(board[last.i][last.j], "frist")
            let goingtopeice = board[last.i][last.j].props.piece
            let goingtopeicecolor = board[last.i][last.j].props.side
            //console.log(board[first.i][first.j],"color")
            console.log("step1")
            //check if is a white bishop
            //check valid bishop movement
            if (board[first.i][first.j].props.piece === "\u2657") {
                console.log(Bishop(first, last, 6, goingtopeice, goingtopeicecolor, board), "white")
                console.log(goingtopeice, "in bishop")
                if (Bishop(first, last, 6, goingtopeice, goingtopeicecolor, board)) {
                    if (board[first.i][first.j].props.side === 'white' && turn != 1) {
                        return false
                    }
                    console.log("In white")


                    
                    const updatedElement = React.cloneElement(board[last.i][last.j], {
                        ...board[last.i][last.j].props,
                        piece: board[first.i][first.j].props.piece,
                        side: board[first.i][first.j].props.side

                    })
                    const updatedElement2 = React.cloneElement(board[first.i][first.j], {
                        ...board[first.i][first.j].props,
                        side: null,
                        piece: null
                    })



                    updatedBoard[last.i][last.j] = updatedElement;
                    updatedBoard[first.i][first.j] = updatedElement2;
                    if (!isyourkingincheck(updatedBoard, "white", currentblackking, currentwhiteking)){
                        if (board[last.i][last.j].props.piece != null) {
                            // console.log("here", board[last.i][last.j].props.piece)
                            let taken = board[last.i][last.j].props.piece
                            setwhitetakes(prev => [...prev, taken])

                        }
                        setBoard(updatedBoard);
                        setcurrent([]);
                        setTurn(prev => prev == 1 ? 2 : 1)
                }


            }
        }else if (board[first.i][first.j].props.piece === "\u265D") {
                console.log(Bishop(first, last, 1, goingtopeice, goingtopeicecolor, board), "black")
                if (Bishop(first, last, 1, goingtopeice, goingtopeicecolor, board)) {
                    if (board[first.i][first.j].props.side === 'black' && turn != 2) {
                        return false
                    }

                   
                    const updatedElement = React.cloneElement(board[last.i][last.j], {
                        ...board[last.i][last.j].props,
                        piece: board[first.i][first.j].props.piece,
                        side: board[first.i][first.j].props.side

                    })
                    const updatedElement2 = React.cloneElement(board[first.i][first.j], {
                        ...board[first.i][first.j].props,
                        piece: null,
                        side: null


                    })

                    updatedBoard[last.i][last.j] = updatedElement;
                    updatedBoard[first.i][first.j] = updatedElement2;

                    if (!isyourkingincheck(updatedBoard, "black", currentblackking, currentwhiteking)) {
                        if (board[last.i][last.j].props.piece != null) {
                            let taken = board[last.i][last.j].props.piece
                            setblacktakes(prev => [...prev, taken])

                        }
                        setBoard(updatedBoard);
                        setcurrent([]);
                        setTurn(prev => prev == 1 ? 2 : 1)
                    }

                }


            }

        }
        //console.log((localStorage.getItem('white_2_pawn')),"w");
        //console.log((localStorage.getItem('black_2_pawn')), "b");
    }
    }

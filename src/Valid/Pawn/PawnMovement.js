import Pawn from "./Pawn";
import React from "react";
export function handlePawnmovement(board, current, setBoard, setcurrent, setwhitetakes, setblacktakes) {
if (current.length === 2) {
    const updatedBoard = [...board];

    let first = current[0];
    let last = current[1];
    //console.log(first.i === last.i && first.j === last.j , "frist-last")
    let blacklastmove = JSON.parse(localStorage.getItem("black_2_pawn"));
    let whitelastmove = JSON.parse(localStorage.getItem("white_2_pawn"));

    
    if (!(first.i === last.i && first.j === last.j)) {
        //console.log(board[last.i][last.j], "frist")
        let goingtopeice = board[last.i][last.j].props.piece
        let goingtopeicecolor = board[last.i][last.j].props.side
        //console.log(board[first.i][first.j],"color")

        //check if is a white pawn
        //check valid pawn movement
        if (board[first.i][first.j].props.piece === "\u2659") {
            console.log(Pawn(first, last, 6, goingtopeice,goingtopeicecolor), "white")
            console.log(goingtopeice)
            if (Pawn(first, last, 6, goingtopeice,goingtopeicecolor)) {
                console.log("In white")
                //case when enpassent
                if (first.j !== last.j && board[first.i][last.j].props.piece != null && board[first.i][last.j].props.side !=="white" && last.i===2) {
                    const updatedElement = React.cloneElement(board[last.i][last.j], {
                        ...board[last.i][last.j].props,
                        piece: board[first.i][first.j].props.piece,
                        side: board[first.i][first.j].props.side
                    })
                    const updatedElement2 = React.cloneElement(board[first.i][first.j], {
                        ...board[first.i][first.j].props,
                        piece: null,
                        side:null
    
                    })
                    const updatedElement3 = React.cloneElement(board[first.i][last.j], {
                        ...board[first.i][last.j].props,
                        piece: null,
                        side:null
                    })
                    console.log("In passent")
                    //console.log("here pass", board[first.i][last.j].props.piece)
                    let taken = board[first.i][last.j].props.piece;
                    setwhitetakes(prev => [...prev, taken])
                    // console.log(whitetakes)
                    board[last.i][last.j] = updatedElement;
                    board[first.i][first.j] = updatedElement2;
                    board[first.i][last.j] = updatedElement3;

                }
                else {
                    if (board[last.i][last.j].props.piece != null) {
                        // console.log("here", board[last.i][last.j].props.piece)
                        let taken = board[last.i][last.j].props.piece
                        setwhitetakes(prev => [...prev, taken])

                    }
                    const updatedElement = React.cloneElement(board[last.i][last.j], {
                        ...board[last.i][last.j].props,
                        piece: board[first.i][first.j].props.piece,
                        side: board[first.i][first.j].props.side

                    })
                    const updatedElement2 = React.cloneElement(board[first.i][first.j], {
                        ...board[first.i][first.j].props,
                        side:null,
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
            console.log(Pawn(first, last, 1, goingtopeice), "black")
            if (Pawn(first, last, 1, goingtopeice,goingtopeicecolor)) {
                //en passent
                if (first.j !== last.j && board[first.i][last.j].props.piece != null && board[first.i][last.j].props.side !== "black" && last.i === 5) {
                    let taken = board[first.i][last.j].props.piece
                    setblacktakes(prev => [...prev, taken])

                    const updatedElement = React.cloneElement(board[last.i][last.j], {
                        ...board[last.i][last.j].props,
                        piece: board[first.i][first.j].props.piece,
                        side: board[first.i][first.j].props.side

                    })
                    const updatedElement2 = React.cloneElement(board[first.i][first.j], {
                        ...board[first.i][first.j].props,
                        piece: null,
                        side:null
                    })
                    const updatedElement3 = React.cloneElement(board[first.i][last.j], {
                        ...board[first.i][last.j].props,
                        piece: null,
                        side:null
                    })

                    board[last.i][last.j] = updatedElement;
                    board[first.i][first.j] = updatedElement2;
                    board[first.i][last.j] = updatedElement3;

                } else {
                    if (board[last.i][last.j].props.piece != null) {
                        let taken = board[last.i][last.j].props.piece
                        setblacktakes(prev => [...prev, taken])

                    }
                    const updatedElement = React.cloneElement(board[last.i][last.j], {
                        ...board[last.i][last.j].props,
                        piece: board[first.i][first.j].props.piece,
                        side: board[first.i][first.j].props.side

                    })
                    const updatedElement2 = React.cloneElement(board[first.i][first.j], {
                        ...board[first.i][first.j].props,
                        piece: null,
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
}}

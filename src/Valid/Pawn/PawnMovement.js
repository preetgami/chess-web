
import Box from "../../Box/Box";
import Pawn from "./Pawn";
import React from "react";
export function handlePawnmovement(board, current, setBoard, setcurrent, setwhitetakes, setblacktakes, turn, setTurn, isyourkingincheck, currentblackking, currentwhiteking) {
 
if (current.length === 2) {
    const updatedBoard = board.map(row => [...row]);


    let first = current[0];
    let last = current[1];
    
    
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
                if (board[first.i][first.j].props.side==='white' && turn!=1){
                    return false
                }
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
                    
                    // console.log(whitetakes)
                    updatedBoard[last.i][last.j] = updatedElement;
                    updatedBoard[first.i][first.j] = updatedElement2;
                    updatedBoard[first.i][last.j] = updatedElement3;
                    if (!isyourkingincheck(updatedBoard, "white", currentblackking, currentwhiteking)) {
                        let taken = board[first.i][last.j].props.piece;
                        setwhitetakes(prev => [...prev, taken])
                        setBoard(updatedBoard);
                        setcurrent([]);
                        setTurn(prev => prev == 1 ? 2 : 1)
                    }
                }
                else {
                    if(last.i==0){
                        //
                        const promotionOptions = ["bishop", "knight", "rook", "queen"];

                        const selectedPromotion = prompt("Choose a piece to promote to: " + promotionOptions.join(", "));

                        if (promotionOptions.includes(selectedPromotion)) {
                            console.log("seleceted")
                            // Create the new piece element based on the selected promotion
                            let piece=null
                            switch(selectedPromotion){
                                case "bishop":
                                    piece ="\u2657"
                                    break;
                                case "knight":
                                    piece = "\u2658"
                                    break;
                                case "queen":
                                    piece = "\u2655"
                                    break;
                                case "rook":
                                    piece = "\u2656"
                                    break;
                            }
                            // Update the board with the new piece element
                            const updatedElement = React.cloneElement(board[last.i][last.j], {
                                ...board[last.i][last.j].props,
                                side: board[first.i][first.j].props.side,
                                piece: piece,
                            });

                            updatedBoard[last.i][last.j] = updatedElement;
                            
                            updatedBoard[first.i][first.j] = React.cloneElement(board[first.i][first.j], {
                                ...board[first.i][first.j].props,
                                piece: null,
                                side: null
                            });
                            if (!isyourkingincheck(updatedBoard, "white", currentblackking, currentwhiteking)) {
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
                }else{
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



                    updatedBoard[last.i][last.j] = updatedElement;
                    updatedBoard[first.i][first.j] = updatedElement2;
                    if (!isyourkingincheck(updatedBoard, "white", currentblackking, currentwhiteking)) {
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
                }
               
            }


        }
        if (board[first.i][first.j].props.piece === "\u265F") {
            console.log(Pawn(first, last, 1, goingtopeice, goingtopeicecolor), "black")
            if (Pawn(first, last, 1, goingtopeice,goingtopeicecolor)) {
                if (board[first.i][first.j].props.side === 'black' && turn != 2) {
                    return false
                }
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

                    updatedBoard[last.i][last.j] = updatedElement;
                    updatedBoard[first.i][first.j] = updatedElement2;
                    updatedBoard[first.i][last.j] = updatedElement3;
                    if (!isyourkingincheck(updatedBoard, "black", currentblackking, currentwhiteking)) {
                        let taken = board[first.i][last.j].props.piece;
                        setwhitetakes(prev => [...prev, taken])
                        setBoard(updatedBoard);
                        setcurrent([]);
                        setTurn(prev => prev == 1 ? 2 : 1)
                    }

                } else {
                    if (last.i == 7) {
                        //
                        const promotionOptions = ["bishop", "knight", "rook", "queen"];

                        const selectedPromotion = prompt("Choose a piece to promote to: " + promotionOptions.join(", "));

                        if (promotionOptions.includes(selectedPromotion)) {
                            console.log("seleceted")
                            // Create the new piece element based on the selected promotion
                            let piece = null
                            switch (selectedPromotion) {
                                case "bishop":
                                    piece = "\u265D"
                                    break;
                                case "knight":
                                    piece = "\u265E"
                                    break;
                                case "queen":
                                    piece = "\u265B"
                                    break;
                                case "rook":
                                    piece = "\u265C"
                                    break;
                            }
                            // Update the board with the new piece element
                            const updatedElement = React.cloneElement(board[last.i][last.j], {
                                ...board[last.i][last.j].props,
                                side: board[first.i][first.j].props.side,
                                piece: piece,
                            });

                            updatedBoard[last.i][last.j] = updatedElement;

                            updatedBoard[first.i][first.j] = React.cloneElement(board[first.i][first.j], {
                                ...board[first.i][first.j].props,
                                piece: null,
                                side: null
                            });

                            if (!isyourkingincheck(updatedBoard, "black", currentblackking, currentwhiteking)) {
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
                    }

                    else{
                    const updatedElement = React.cloneElement(board[last.i][last.j], {
                        ...board[last.i][last.j].props,
                        piece: board[first.i][first.j].props.piece,
                        side: board[first.i][first.j].props.side

                    })
                    const updatedElement2 = React.cloneElement(board[first.i][first.j], {
                        ...board[first.i][first.j].props,
                        piece: null,
                        side: null,


                    })

                    updatedBoard[last.i][last.j] = updatedElement;
                    updatedBoard[first.i][first.j] = updatedElement2;
                
                if (!isyourkingincheck(updatedBoard, "black", currentblackking, currentwhiteking)) {
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
            }
            }


        }

    }
        //console.log((localStorage.getItem('white_2_pawn')),"w");
        //console.log((localStorage.getItem('black_2_pawn')), "b");
}}

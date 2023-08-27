
import King from "./King";
import React from "react";

export function handleKingmovement(board, current, setBoard, setcurrent, setwhitetakes, setblacktakes, turn, setTurn, setcurrentblackking, setcurrentwhiteking) {

    if (current.length === 2) {
        const updatedBoard = [...board];

        let first = current[0];
        let last = current[1];



        if (!(first.i === last.i && first.j === last.j)) {
            //console.log(board[last.i][last.j], "frist")
            let goingtopeice = board[last.i][last.j].props.piece
            let goingtopeicecolor = board[last.i][last.j].props.side
            //console.log(board[first.i][first.j],"color")

            //check if is a white king
            //check valid king movement
            if (board[first.i][first.j].props.piece === "\u2654") {
                console.log(King(first, last, 6, goingtopeice, goingtopeicecolor, board), "white")
                console.log(goingtopeice, "in king")
                if (King(first, last, 6, goingtopeice, goingtopeicecolor, board)) {
                    if (board[first.i][first.j].props.side === 'white' && turn != 1) {
                        return false
                    }
                    console.log("In white")


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
                        side: null,
                        piece: null
                    })
                    setcurrentwhiteking([last.i,last.j])



                    board[last.i][last.j] = updatedElement;
                    board[first.i][first.j] = updatedElement2;

                    setBoard(updatedBoard);
                    setcurrent([]);
                    setTurn(prev => prev == 1 ? 2 : 1)
                }


            }
            else if (board[first.i][first.j].props.piece === "\u265A") {
                console.log(King(first, last, 1, goingtopeice, goingtopeicecolor, board), "black")
                if (King(first, last, 1, goingtopeice, goingtopeicecolor, board)) {
                    if (board[first.i][first.j].props.side === 'black' && turn != 2) {
                        return false
                    }

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
                        side: null


                    })

                    board[last.i][last.j] = updatedElement;
                    board[first.i][first.j] = updatedElement2;
                    setcurrentblackking([last.i, last.j])

                    setBoard(updatedBoard);
                    setcurrent([]);
                    setTurn(prev => prev == 1 ? 2 : 1)

                }


            }

        }
        //console.log((localStorage.getItem('white_2_pawn')),"w");
        //console.log((localStorage.getItem('black_2_pawn')), "b");
    }
}

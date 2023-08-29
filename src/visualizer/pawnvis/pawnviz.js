import React from "react"
export function pawnviz(first, board, setBoard, isKingInCheck, Pawn, yourcolor, currentblackking, currentwhiteking){
    if (board[first.i][first.j].props.piece == "\u2659" || board[first.i][first.j].props.piece == "\u265F") {
        for (let i = 0; i <= 2; i++) {
            let addition = yourcolor == "white" ? i : i * (-1)
            //console.log(addition, "add")
            let finish = { i: first.i - addition, j: first.j }
            if (!(finish.i >= 0 && finish.i <= 7 && finish.j <= 7 && finish.j >= 0)) {
                continue
            }
            let goingtopeice = board[finish.i][finish.j].props.piece
            //console.log("pawn alllowed to move here")

            let color = board[finish.i][finish.j].props.side

            let row = yourcolor == "white" ? 6 : 1
            if (Pawn(first, finish, row, goingtopeice, color)) {
                const tempboard = board.map(row => [...row]);
                const updatedElement = React.cloneElement(tempboard[first.i][first.j], {
                    ...tempboard[first.i][first.j].props,
                    piece: null,
                    side: null,

                })
                const updatedElement2 = React.cloneElement(tempboard[finish.i][finish.j], {
                    ...tempboard[finish.i][finish.j].props,
                    side: tempboard[first.i][first.j].props.side,
                    piece: tempboard[first.i][first.j].props.peice,

                })


                tempboard[first.i][first.j] = updatedElement
                tempboard[finish.i][finish.j] = updatedElement2

                if (!isKingInCheck(tempboard, yourcolor, currentblackking, currentwhiteking)) {
                    //movement allowed
                    //set display to true
                    const updatedElement2 = React.cloneElement(board[finish.i][finish.j], {
                        ...board[finish.i][finish.j].props,
                        display: true

                    })
                    const newBoard = [...board];
                    newBoard[finish.i][finish.j] = updatedElement2;
                    setBoard(newBoard)
                }


            }
        }
        for (let i = -1; i <= 1; i++) {
            let addition = yourcolor == "white" ? 1 : -1

            let finish = { i: first.i - addition, j: first.j + i }
            if (!(finish.i >= 0 && finish.i <= 7 && finish.j <= 7 && finish.j >= 0)) {
                continue
            }
            //console.log(finish)
            let goingtopeice = board[finish.i][finish.j].props.piece
            //console.log("pawn alllowed to move here,side")

            let color = board[finish.i][finish.j].props.side
            let row = yourcolor == "white" ? 6 : 1

            if (Pawn(first, finish, row, goingtopeice, color)) {
                const tempboard = board.map(row => [...row]);
                const updatedElement = React.cloneElement(tempboard[first.i][first.j], {
                    ...tempboard[first.i][first.j].props,
                    piece: null,
                    side: null,

                })
                const updatedElement2 = React.cloneElement(tempboard[finish.i][finish.j], {
                    ...tempboard[finish.i][finish.j].props,
                    side: tempboard[first.i][first.j].props.side,
                    piece: tempboard[first.i][first.j].props.peice,

                })


                tempboard[first.i][first.j] = updatedElement
                tempboard[finish.i][finish.j] = updatedElement2

                if (!isKingInCheck(tempboard, yourcolor, currentblackking, currentwhiteking)) {
                    //movement allowed
                    //set display to true
                    const updatedElement2 = React.cloneElement(board[finish.i][finish.j], {
                        ...board[finish.i][finish.j].props,
                        display: true

                    })
                    const newBoard = [...board];
                    newBoard[finish.i][finish.j] = updatedElement2;
                    setBoard(newBoard)
                }


            }
        }
    }
}
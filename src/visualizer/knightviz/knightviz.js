import React from "react"
export function knightviz(first, board, setBoard, isKingInCheck, Knight, yourcolor, currentblackking, currentwhiteking) {
    if (board[first.i][first.j].props.piece == "\u265E" || board[first.i][first.j].props.piece == "\u2658") {
        let horsevalid = true;
        const knightMoves = [
            { row: -2, col: -1 },
            { row: -2, col: 1 },
            { row: -1, col: -2 },
            { row: -1, col: 2 },
            { row: 1, col: -2 },
            { row: 1, col: 2 },
            { row: 2, col: -1 },
            { row: 2, col: 1 }
        ];

        for (const move of knightMoves) {
            const newRow = first.i + move.row;
            const newCol = first.j + move.col;

            let finish = { i: newRow, j: newCol }
            if (!(finish.i >= 0 && finish.i <= 7 && finish.j <= 7 && finish.j >= 0)) {
                continue
            }
            let goingtopeice = board[finish.i][finish.j].props.piece
            //console.log("knight alllowed to move here")

            let color = board[finish.i][finish.j].props.side

            if (Knight(first, finish, 1, goingtopeice, color, board)) {
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

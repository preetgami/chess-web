import React from "react"
export function bishopviz(first, board, setBoard, isKingInCheck, Bishop, yourcolor, currentblackking, currentwhiteking) {
    if (board[first.i][first.j].props.piece == "\u2657" || board[first.i][first.j].props.piece == "\u265D" || board[first.i][first.j].props.piece == "\u2655" || board[first.i][first.j].props.piece == "\u265B") {
        let w=[[1,1],[1,-1],[-1,1],[-1,-1]]
        for (let x=0;x<w.length;x++){
            let dx=w[x][0]
            let dy=w[x][1]
            for (let i = first.i + dx, j = first.j + dy; i >= 0 && i <= 7 && j >= 0 && j <= 7; i += dx, j += dy) {
                let finish = { i: i, j: j }
                if (!(finish.i >= 0 && finish.i <= 7 && finish.j <= 7 && finish.j >= 0)) {
                    continue
                }
                let goingtopeice = board[finish.i][finish.j].props.piece
                console.log("bishop alllowed to move here")

                let color = board[finish.i][finish.j].props.side

                if (Bishop(first, finish, 1, goingtopeice, color, board)) {
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
}
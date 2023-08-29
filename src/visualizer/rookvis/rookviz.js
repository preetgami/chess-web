import React from "react"
export function rookviz(first, board, setBoard, isKingInCheck, Rook, yourcolor, currentblackking, currentwhiteking) {
    if (board[first.i][first.j].props.piece == "\u2656" || board[first.i][first.j].props.piece == "\u265C" || board[first.i][first.j].props.piece == "\u2655" || board[first.i][first.j].props.piece == "\u265B") {
        for (let i = first.i; i <= 7; i++) {

            let finish = { i: i, j: first.j }
            if (!(finish.i >= 0 && finish.i <= 7 && finish.j <= 7 && finish.j >= 0)) {
                continue
            }
            let goingtopeice = board[finish.i][finish.j].props.piece
            //console.log("rook alllowed to move here")

            let color = board[finish.i][finish.j].props.side

            if (Rook(first, finish, 1, goingtopeice, color,board)) {
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
        for (let i = first.i; i >= 0; i--) {

            let finish = { i: i, j: first.j }
            if (!(finish.i >= 0 && finish.i <= 7 && finish.j <= 7 && finish.j >= 0)) {
                continue
            }
            let goingtopeice = board[finish.i][finish.j].props.piece
            //console.log("rook alllowed to move here")

            let color = board[finish.i][finish.j].props.side

            if (Rook(first, finish, 1, goingtopeice, color, board)) {
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
        for (let i = first.j; i >= 0; i--) {

            let finish = { i: first.i, j: i }
            if (!(finish.i >= 0 && finish.i <= 7 && finish.j <= 7 && finish.j >= 0)) {
                continue
            }
            let goingtopeice = board[finish.i][finish.j].props.piece
            //console.log("rook alllowed to move here")

            let color = board[finish.i][finish.j].props.side

            if (Rook(first, finish, 1, goingtopeice, color, board)) {
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
        for (let i = first.j; i <= 7; i++) {

            let finish = { i: first.i, j: i }
            if (!(finish.i >= 0 && finish.i <= 7 && finish.j <= 7 && finish.j >= 0)) {
                continue
            }
            let goingtopeice = board[finish.i][finish.j].props.piece
            //console.log("rook alllowed to move here")

            let color = board[finish.i][finish.j].props.side

            if (Rook(first, finish, 1, goingtopeice, color, board)) {
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

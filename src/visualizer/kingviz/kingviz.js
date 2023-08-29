import React from "react"
import { cankingcastle } from "../../Valid/king/cankingcastle"
export function kingviz(first, board, setBoard, isKingInCheck, King, yourcolor, currentblackking, currentwhiteking) {
    if (board[first.i][first.j].props.piece == "\u2654" || board[first.i][first.j].props.piece == "\u265A" ) {
        let w = [[1, 1], [1, 0], [1, -1], [0, 1],[0,-1],[-1,1],[-1,0],[-1,-1]]
        
        for (let x = 0; x < w.length; x++) {
            let dx = w[x][0]
            let dy = w[x][1]

            let finish = { i: first.i+dy, j: first.j+dx }

            if (!(finish.i >= 0 && finish.i <= 7 && finish.j <= 7 && finish.j >= 0)) {
                continue
            }
            let goingtopeice = board[finish.i][finish.j].props.piece
            //console.log("king alllowed to move here")

            let color = board[finish.i][finish.j].props.side

            if (King(first, finish, 1, goingtopeice, color, board)) {
                
                const updatedElement2 = React.cloneElement(board[finish.i][finish.j], {
                    ...board[finish.i][finish.j].props,
                    display: true

                })
                const newBoard = [...board];
                newBoard[finish.i][finish.j] = updatedElement2;
                setBoard(newBoard)
                


            }
        }
        if (board[first.i][first.j].props.empty){
            let move=[[0,0],[0,7],[7,0],[7,7]]
            for (let x = 0; x < move.length; x++) {
                let dx = move[x][0]
                let dy = move[x][1]

                let finish = { i:  dy, j:  dx }

                if (!(finish.i >= 0 && finish.i <= 7 && finish.j <= 7 && finish.j >= 0)) {
                    continue
                }
                let goingtopeice = board[finish.i][finish.j].props.piece
                //console.log("king castle alllowed to move here",goingtopeice,dy,dx)

                let color = board[finish.i][finish.j].props.side

                if (cankingcastle(board, first, finish, isKingInCheck)) {
                    //console.log("castle allowed,", dy,dx)

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
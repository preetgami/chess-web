import React from "react"
export function vizualizeoff(board,setBoard){

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const updatedElement2 = React.cloneElement(board[i][j], {
                ...board[i][j].props,
                display: false

            })
            board[i][j] = updatedElement2
            setBoard(board)
        
        }}

}
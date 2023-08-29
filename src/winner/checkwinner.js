import React from "react";
export function checkwinner(board, isyourkingincheck, currentblackking, currentwhiteking, yourColor){
    const isKingInCheck = isyourkingincheck(board, yourColor, currentblackking, currentwhiteking);
    //console.log("win checker")
    // Checkmate: Your king is in check and you have no legal moves to get out of check
    //console.log(canMoveOutOfCheck(board, yourColor, currentblackking, currentwhiteking, isyourkingincheck),"can move king out")
    if (isKingInCheck && !canMoveOutOfCheck(board, yourColor, currentblackking, currentwhiteking, isyourkingincheck)) {
        //console.log("Innnnnnnn")
        return true;
    }

    // Stalemate: Your king is not in check, but you have no legal moves
    /*
    if (!isKingInCheck && !canAnyPieceMove(board, yourColor)) {
        return "draw";
    }
*/
    // No winner yet
    return false;

}

function canMoveOutOfCheck(board, yourColor, currentBlackKing, currentWhiteKing, isyourkingincheck) {
    //const tempboard = board.map(row => [...row]);
    let cords = yourColor=="white"?currentWhiteKing:currentBlackKing
    //console.log(cords,"cordss",board)
    const kingRow = cords[0]
    const kingCol=cords[1]

    // Iterate through adjacent squares around the king
    for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
            if (dr === 0 && dc === 0) {
                continue; // Skip the king's position
            }
            //console.log("Insde for loop")
            const tempboard = board.map(row => [...row]);

            const newRow = kingRow + dr;
            const newCol = kingCol + dc;
            //console.log(newRow, newCol)


            // Check if the new position is within the board boundaries
            if (newRow>=0 && newRow<=7 && newCol>=0 && newCol<=7) {

                if (tempboard[newRow][newCol].props.piece == null || tempboard[newRow][newCol].props.side!=yourColor) {
                    const updatedElement = React.cloneElement(tempboard[newRow][newCol], {
                        ...tempboard[newRow][newCol].props,
                        piece: board[kingRow][kingCol].props.piece,
                        side: board[kingRow][kingCol].props.side,

                    })
                    const updatedElement2 = React.cloneElement(board[kingRow][kingCol], {
                        ...board[kingRow][kingCol].props,
                        side: null,
                        piece: null,

                    })


                    tempboard[newRow][newCol] = updatedElement
                    tempboard[kingRow][kingCol] = updatedElement2
                    let currentwhiteking1 = [newRow,newCol]
                    let currentblackking1 = [newRow,newCol]
                    //console.log(tempboard, "temppp", kingRow, kingCol)

                    //console.log(tempboard, "temp")
                    //console.log(color)
                    if (!isyourkingincheck(tempboard, yourColor, currentblackking1, currentwhiteking1)) {
                        return true
                    }
                }
            }
        }
    }

    return false; // King cannot move out of check
}

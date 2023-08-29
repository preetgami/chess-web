export default function Knight(start, finish, row, goingtopeice, color, board) {
    //white pawn
    //is king in check? then return false automatically, addition param for check
    //going to king then false
    //console.log(board)

    if (goingtopeice === "\u265A" || goingtopeice === "\u2654") {
        return false
    }

    //if rook going to same color not allowed
    if (board[start.i][start.j].props.side === 'white' && color == "white") {
        return false
    }
    if (board[start.i][start.j].props.side === 'black' && color == "black") {
        return false
    }
    // Calculate row and column differences
    const rowdiff=Math.abs(finish.i-start.i)
    const coldiff = Math.abs(finish.j - start.j)

    if ((rowdiff==2 && coldiff==1)|| (coldiff==2 && rowdiff==1)){
        return true
    }
    return false

    
    
}





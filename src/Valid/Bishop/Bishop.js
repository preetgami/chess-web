export default function Bishop(start, finish, row, goingtopeice, color, board) {
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
    const rowDiff = Math.abs(finish.i - start.i);
    const colDiff = Math.abs(finish.j - start.j);

    if (rowDiff==colDiff){
        let rowstep=start.i<finish.i? 1:-1
        let colstep = start.j < finish.j ? 1 : -1

        for (let i=start.i+rowstep,j=start.j+colstep;i!=finish.i;i+=rowstep,j+=colstep){
            //console.log(i,j)
            if (board[i][j].props.piece != null) {
                return false

            }
        }
        return true

    }
    return false; // Not moving along a diagonal
}





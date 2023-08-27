export default function Queen(start, finish, row, goingtopeice, color, board) {
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
    
    // Calculate row and column differences
    const rowDiff = Math.abs(finish.i - start.i);
    const colDiff = Math.abs(finish.j - start.j);

    // Queen can move like a combination of rook and bishop
    // Check for valid diagonal or straight line movement
    if ((rowDiff === colDiff) || (start.i === finish.i) || (start.j === finish.j)) {
        const rowStep = start.i < finish.i ? 1 : -1;
        const colStep = start.j < finish.j ? 1 : -1;

        // Check for pieces in the path

        //diagonal
        if (rowDiff === colDiff) {
            for (let i = start.i + rowStep, j = start.j + colStep; i !== finish.i; i += rowStep, j += colStep) {
                if (board[i][j].props.piece !== null) {
                    return false; 
                }
            }
        //same horiz
        } else if (start.i === finish.i) {
            for (let j = start.j + colStep; j !== finish.j; j += colStep) {
                if (board[start.i][j].props.piece !== null) {
                    return false; 
                }
            }
        //same vert
        } else {
            for (let i = start.i + rowStep; i !== finish.i; i += rowStep) {
                if (board[i][start.j].props.piece !== null) {
                    return false; 
                }
            }
        }

        return true; // Valid queen movement
    }

    return false; // Invalid movement for queen
}








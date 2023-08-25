export default function Rook(start, finish, row, goingtopeice, color,board) {
    //white pawn
    //is king in check? then return false automatically, addition param for check
    //going to king then false
    console.log(board)

    if (goingtopeice === "\u265A" || goingtopeice === "\u2654") {
        return false
    }

    //if rook going to same color not allowed
    if (board[start.i][start.j].props.side === 'white' && color=="white"){
        return false
    }
    if (board[start.i][start.j].props.side === 'black' && color == "black") {
        return false
    }

    
    if (start.i==finish.i){
        if (start.j<finish.j){
            console.log("same horiz, left to right")

            for (let x = start.j+1; x < finish.j; x++) {
                console.log(x)



                if (board[start.i][x].props.piece !=null){
                    return false
                }
        }
            return true
    
        }
        else{
            console.log("same horiz, right to left")

                for (let x = start.j-1; x >finish.j; x--) {
                    console.log(x)
                    if (board[start.i][x].props.piece != null) {
                        return false
                    }
        }
            return true
    
        }
    } else if (start.j == finish.j){
        if (start.i <finish.i)  {
            console.log("same vert, up to dwon")

                for (let x = start.i + 1; x < finish.i; x++) {
                    console.log(x)


                    if (board[x][start.j].props.piece != null) {
                        return false
                    }
                }
                return true

            } else {
                console.log("same vert, down  to up")

                for (let x = start.i - 1; x > finish.i; x--) {
                    console.log(x)
                    if (board[x][start.j].props.piece != null) {
                        return false
                    }
                }
                return true

            }
    
}
}


export default function King(start, finish, row, goingtopeice, color, board) {
    //white pawn
    //is king in check? then return false automatically, addition param for check
    //going to king then false
    console.log(board)

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
    let coldown=null;
    let colup=null;
    let rowleft=null;
    let rowright=null;

    //need to check if the move wont put the king in check
    if (Math.abs(finish.i - start.i) <= 1 && Math.abs(finish.j - start.j) <= 1){
        //check if new finish puts it in ddanger.
        //check diagonals
        //check startighs 
        //checck horse


        //check up to down
        for(let i=finish.i+1;i<8;i++){
            console.log("checking...up to dwon",i)
            console.log(board[i][finish.j].props.piece)
            coldown = true;

            if (board[i][finish.j].props.piece !=null){
                console.log("innn")

                if (board[start.i][start.j].props.side=="white"){
                    if (board[i][finish.j].props.piece =="\u2654" ) {
                        continue
                    }
                    if (board[i][finish.j].props.piece == "\u265C" || board[i][finish.j].props.piece == "\u265B" ){
                        return false
                    }
                    coldown=true
                    break;
                    
                }
                //check for white queen/rook
                else{
                    if (board[i][finish.j].props.piece == "\u265A") {
                        continue
                    }
                    if (board[i][finish.j].props.piece == "\u2656" || board[i][finish.j].props.piece == "\u2655") {
                        return false
                    }
                    coldown=true;
                    break;
                    
                }
            }

        }
        //check down to up
        for (let i = finish.i-1; i >=0 ; i--) {
            console.log("checking sown to up", i)
            console.log(board[i][finish.j].props.piece)
            colup = true;

            if (board[i][finish.j].props.piece != null) {
                console.log("innn")

                if (board[start.i][start.j].props.side == "white") {
                    if (board[i][finish.j].props.piece == "\u2654") {
                        continue
                    }
                    if (board[i][finish.j].props.piece == "\u265C" || board[i][finish.j].props.piece == "\u265B") {
                        return false
                    }
                    colup=true;
                    break;

                }
                //check for white queen/rook
                else {
                    if (board[i][finish.j].props.piece == "\u265A") {
                        continue
                    }
                    if (board[i][finish.j].props.piece == "\u2656" || board[i][finish.j].props.piece == "\u2655") {
                        return false
                    }
                    colup = true;
                    break;

                }
            }

        }

        //check side to side
        for (let j = finish.j+1; j < 8; j++) {
            console.log("checking...", j)
            console.log(board[finish.i][j].props.piece)
            rowleft = true;

            if (board[finish.i][j].props.piece != null) {
                console.log("innn")

                if (board[start.i][start.j].props.side == "white") {
                    if (board[finish.i][j].props.piece == "\u2654") {
                        continue
                    }
                    if (board[finish.i][j].props.piece == "\u265C" || board[finish.i][j].props.piece == "\u265B") {
                        return false
                    }
                    rowleft=true;
                    break;
                    

                }
                //check for white queen/rook
                else {
                    if (board[finish.i][j].props.piece == "\u265A") {
                        continue
                    }
                    if (board[finish.i][j].props.piece == "\u2656" || board[finish.i][j].props.piece == "\u2655") {
                        return false
                    }
                    rowleft = true;
                    break;

                }
            }

        }
        //check down to up
        for (let j = finish.j-1; j >=0; j--) {
            console.log("checking...row", j)
            console.log(board[finish.i][j].props.piece)
            rowright = true;

            if (board[finish.i][j].props.piece != null) {
                console.log("innn")

                if (board[start.i][start.j].props.side == "white") {
                    if (board[finish.i][j].props.piece == "\u2654") {
                        continue
                    }
                    if (board[finish.i][j].props.piece == "\u265C" || board[finish.i][j].props.piece == "\u265B") {
                        return false
                    }
                    rowright=true;
                    break;

                }
                //check for white queen/rook
                else {
                    if (board[finish.i][j].props.piece == "\u265A") {
                        continue
                    }
                    if (board[finish.i][j].props.piece == "\u2656" || board[finish.i][j].props.piece == "\u2655") {
                        return false
                    }
                    rowright = true;
                    break;

                }
            }

        }


        //check diagonals
        //bottomleft to top right +1 +1
        //finish is start pos to check from
        //++
        //+-
        //-+
        //--
        let plusplus=null;
        let plusminus=null;
        let minusplus=null;
        let minusminus =null;
        for (let i = finish.i+1, j = finish.j +1; i < 8 && j < 8; i++, j++) {
            console.log(i,j,"plusplus")
            plusplus = true

            if (board[i][j].props.piece != null) {
                console.log("innn")

                if (board[start.i][start.j].props.side == "white") {
                    if (board[i][j].props.piece == "\u2654") {
                        continue
                    }
                    if (board[i][j].props.piece == "\u265D" || board[i][j].props.piece == "\u265B") {
                        return false
                    }
                    plusplus = true
                    break;

                }
                //check for white queen/rook
                else {
                    if (board[i][j].props.piece == "\u265A") {
                        continue
                    }
                    if (board[i][j].props.piece == "\u2657" || board[i][j].props.piece == "\u2655") {
                        return false
                    }
                    plusplus = true;
                    break;

                }
            }
        }
        for (let i = finish.i-1 , j = finish.j+1 ; i >= 0 && j < 8; i--, j++) {
            plusminus = true

            console.log(i, j, "plusminus")
            if (board[i][j].props.piece != null) {
                console.log("innn")

                if (board[start.i][start.j].props.side == "white") {
                    if (board[i][j].props.piece == "\u2654") {
                        continue
                    }
                    if (board[i][j].props.piece == "\u265D" || board[i][j].props.piece == "\u265B") {
                        return false
                    }
                    plusminus = true
                    break;

                }
                //check for white queen/rook
                else {
                    if (board[i][j].props.piece == "\u265A") {
                        continue
                    }
                    if (board[i][j].props.piece == "\u2657" || board[i][j].props.piece == "\u2655") {
                        return false
                    }
                    plusminus = true;
                    break;

                }
            }
        }

        for (let i = finish.i+1, j = finish.j-1; i < 8 && j >= 0; i++, j--) {
            minusplus = true

            console.log(i, j, "minusplus")
            if (board[i][j].props.piece != null) {
                console.log("innn")

                if (board[start.i][start.j].props.side == "white") {
                    if (board[i][j].props.piece == "\u2654") {
                        continue
                    }
                    if (board[i][j].props.piece == "\u265D" || board[i][j].props.piece == "\u265B") {
                        return false
                    }
                    minusplus = true
                    break;

                }
                //check for white queen/rook
                else {
                    if (board[i][j].props.piece == "\u265A") {
                        continue
                    }
                    if (board[i][j].props.piece == "\u2657" || board[i][j].props.piece == "\u2655") {
                        return false
                    }
                    minusplus = true;
                    break;

                }
            }
        }

        for (let i = finish.i -1, j = finish.j -1; i >= 0 && j >= 0; i--, j--) {
            console.log(i, j, "minusminus")
            minusminus = true

            if (board[i][j].props.piece != null) {
                console.log("innn")

                if (board[start.i][start.j].props.side == "white") {
                    if (board[i][j].props.piece == "\u2654") {
                        continue
                    }
                    if (board[i][j].props.piece == "\u265D" || board[i][j].props.piece == "\u265B") {
                        return false
                    }
                    minusminus = true
                    break;

                }
                //check for white queen/rook
                else {
                    if (board[i][j].props.piece == "\u265A") {
                        continue
                    }
                    if (board[i][j].props.piece == "\u2657" || board[i][j].props.piece == "\u2655") {
                        return false
                    }
                    minusminus = true;
                    break;

                }
            }
        }
        //all horse positions
        let horsevalid=null;
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
            const newRow = finish.i + move.row;
            const newCol = finish.j + move.col;
            console.log(newRow,newCol,"horsy")

            if (newRow<=7 && newRow>=0 && newCol<=7 &&newCol>=0) {
                console.log("in horse", board[start.i][start.j].props.side)
                console.log (board[newRow][newCol].props.piece) 
                if (board[newRow][newCol].props.piece !== null) {
                    console.log("hi")

                    if (board[start.i][start.j].props.side === "white") {
                        
                        if (board[newRow][newCol].props.piece === "\u265E") {
                            return false;
                        } 
                    }
                    else {
                        if (board[newRow][newCol].props.piece === "\u2658"){
                            return false;
                        }
                    }
                    
                }
                }
        }
        horsevalid=true;
    
        //need ot check pawn attacks
        let pawanvalid=null
        if (board[start.i][start.j].props.side === "white") {
            let newr=finish.i-1
            let newcol=finish.j-1
            let newcol2=finish.j+1
            console.log("Paw1n")

            if (newr<=7 && newr>=0){
                if (newcol <= 7 && newcol >= 0) {
                    if (board[newr][newcol].props.piece =="\u265F"){
                        return false
                    }
            }
            if (newcol2 <= 7 && newcol2 >= 0) {
                if (board[newr][newcol2].props.piece == "\u265F") {
                    return false
                }
            }
        }}
        else{
            console.log("Pawn")
            let newr = finish.i + 1
            let newcol = finish.j - 1
            let newcol2 = finish.j + 1
            if (newr <= 7 && newr >= 0) {
                if (newcol <= 7 && newcol >= 0) {
                    if (board[newr][newcol].props.piece == "\u2659") {
                        return false
                    }
                }
                if (newcol2 <= 7 && newcol2 >= 0) {
                    if (board[newr][newcol2].props.piece == "\u2659") {
                        return false
                    }
                }
        }
    }
    pawanvalid=true;
    console.log(coldown, colup, rowleft, rowright, plusplus, plusminus, minusplus, minusminus, horsevalid, pawanvalid)
    if (coldown && colup && rowleft && rowright && plusplus && plusminus && minusplus && minusminus && horsevalid&& pawanvalid){
        return true    
    
    }
    
}

}




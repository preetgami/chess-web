export function isyourkingincheck(board, yourcolor, currentblackking, currentwhiteking){
    console.log(yourcolor,"are you in check")

    if(yourcolor=="white"){
        let kingrow=currentwhiteking[0]
        let kingcol = currentwhiteking[1]
        let finish={i:kingrow,j:kingcol}
        //returns true if not in check

        //there for return with ! return true if in check
        return !maincheck(finish,board,yourcolor)

    }else{
        let kingrow = currentblackking[0]
        let kingcol = currentblackking[1]
        let finish = { i: kingrow, j: kingcol }
        return !maincheck(finish, board, yourcolor)

    }
    
}




function maincheck(finish,board,color){
    //check up to down
    let coldown = true;
    let colup = true;
    let rowleft = true;
    let rowright = true;
    for (let i = finish.i+1; i < 8; i++) {
        console.log("checking...up to dwon", i)
        console.log(board[i][finish.j].props.piece)

        if (board[i][finish.j].props.piece != null) {
            console.log("innn")

            if (color == "white") {
                if (board[i][finish.j].props.piece == "\u2654") {
                    continue
                }
                if (board[i][finish.j].props.piece == "\u265C" || board[i][finish.j].props.piece == "\u265B") {
                    return false
                }
                coldown = true
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
                coldown = true;
                break;

            }
        }

    }
    //check down to up
    for (let i = finish.i-1; i >= 0; i--) {
        console.log("checking sown to up", i)
        console.log(board[i][finish.j].props.piece)
        colup = true;

        if (board[i][finish.j].props.piece != null) {
            console.log("innn")

            if (color == "white") {
                if (board[i][finish.j].props.piece == "\u2654") {
                    continue
                }
                if (board[i][finish.j].props.piece == "\u265C" || board[i][finish.j].props.piece == "\u265B") {
                    return false
                }
                colup = true;
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

            if (color == "white") {
                if (board[finish.i][j].props.piece == "\u2654") {
                    continue
                }
                if (board[finish.i][j].props.piece == "\u265C" || board[finish.i][j].props.piece == "\u265B") {
                    return false
                }
                rowleft = true;
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
    for (let j = finish.j-1; j >= 0; j--) {
        console.log("checking...row", j)
        console.log(board[finish.i][j].props.piece)
        rowright = true;

        if (board[finish.i][j].props.piece != null) {
            console.log("innn")

            if (color == "white") {
                if (board[finish.i][j].props.piece == "\u2654") {
                    continue
                }
                if (board[finish.i][j].props.piece == "\u265C" || board[finish.i][j].props.piece == "\u265B") {
                    return false
                }
                rowright = true;
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
    let plusplus = true;
    let plusminus = true;
    let minusplus = true;
    let minusminus = true;
    for (let i = finish.i+1, j = finish.j+1; i < 8 && j < 8; i++, j++) {
        console.log(i, j, "plusplus")
        plusplus = true

        if (board[i][j].props.piece != null) {
            console.log("innn")

            if (color == "white") {
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
    for (let i = finish.i-1, j = finish.j+1; i >= 0 && j < 8; i--, j++) {
        plusminus = true

        console.log(i, j, "plusminus")
        if (board[i][j].props.piece != null) {
            console.log("innn")

            if (color == "white") {
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

            if (color == "white") {
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

    for (let i = finish.i-1, j = finish.j-1; i >= 0 && j >= 0; i--, j--) {
        console.log(i, j, "minusminus")
        minusminus = true

        if (board[i][j].props.piece != null) {
            console.log("innn")

            if (color == "white") {
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
    let horsevalid = true;
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
        console.log(newRow, newCol, "horsy")

        if (newRow <= 7 && newRow >= 0 && newCol <= 7 && newCol >= 0) {
            console.log("in horse", color)
            console.log(board[newRow][newCol].props.piece)
            if (board[newRow][newCol].props.piece !== null) {
                console.log("hi")

                if (color === "white") {

                    if (board[newRow][newCol].props.piece === "\u265E") {
                        return false;
                    }
                }
                else {
                    if (board[newRow][newCol].props.piece === "\u2658") {
                        return false;
                    }
                }

            }
        }
    }
    horsevalid = true;

    //need ot check pawn attacks
    let pawanvalid = true
    if (color === "white") {
        let newr = finish.i - 1
        let newcol = finish.j - 1
        let newcol2 = finish.j + 1
        console.log("Paw1n")

        if (newr <= 7 && newr >= 0) {
            if (newcol <= 7 && newcol >= 0) {
                if (board[newr][newcol].props.piece == "\u265F") {
                    return false
                }
            }
            if (newcol2 <= 7 && newcol2 >= 0) {
                if (board[newr][newcol2].props.piece == "\u265F") {
                    return false
                }
            }
        }
    }
    else {
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
    pawanvalid = true;
    console.log(coldown,"coldwon", colup, rowleft, rowright, plusplus, plusminus, minusplus, minusminus, horsevalid, pawanvalid)
    if (coldown && colup && rowleft && rowright && plusplus && plusminus && minusplus && minusminus && horsevalid && pawanvalid) {
        return true

    }
}
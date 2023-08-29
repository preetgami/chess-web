import React from "react"
export function cankingcastle(board,first,last,isyourkingincheck){
    
    if (board[first.i][first.j].props.empty && board[last.i][last.j].props.piece == "\u2656" && board[last.i][last.j].props.empty) {
        //castle king side
        //console.log("here i am me")
        //console.log(last.i == 0 && last.j == 7 && board[last.i][last.j].props.piece == "\u265C" && board[last.i][last.j].props.empty)
        if (board[first.i][first.j].props.piece === "\u2654") {
            if (last.i == 7 && last.j == 7 && board[last.i][last.j].props.piece == "\u2656" && board[last.i][last.j].props.empty) {
                //console.log("vamossssss king side")
                let j = first.j + 1
                let tempboard = board.map(row => [...row]);
                let color = tempboard[first.i][first.j].props.side
                //console.log(color, color)
                while (j <= 6) {
                    //console.log(j)
                    if (tempboard[first.i][j].props.piece == null) {
                        const updatedElement = React.cloneElement(tempboard[first.i][j], {
                            ...tempboard[first.i][j].props,
                            piece: tempboard[first.i][j - 1].props.piece,
                            side: tempboard[first.i][j - 1].props.side,

                        })
                        const updatedElement2 = React.cloneElement(tempboard[first.i][j - 1], {
                            ...tempboard[first.i][j].props,
                            side: null,
                            piece: null,

                        })


                        tempboard[first.i][j] = updatedElement
                        tempboard[first.i][j - 1] = updatedElement2
                        let currentwhiteking1 = [first.i, j]
                        let currentblackking1 = [first.i, j]
                        //console.log(tempboard, "temp")
                        //console.log(color)

                        if (isyourkingincheck(tempboard, color, currentblackking1, currentwhiteking1)) {
                            return false
                        }

                    }
                    else {
                        //console.log("h yea h yeah")
                        return false
                    }
                    j += 1
                }


                

                return true




            }
            //castle queen side
            else if (last.i == 7 && last.j == 0 && board[last.i][last.j].props.piece == "\u2656" && board[last.i][last.j].props.empty) {
                //console.log("vamossssssssssssssssss")
                //console.log(first)
                let j = first.j - 1
                let tempboard = board.map(row => [...row]);
                let color = tempboard[first.i][first.j].props.side
                //console.log(color, color)
                while (j > 0) {
                    //console.log(j)
                    if (tempboard[first.i][j].props.piece == null) {
                        const updatedElement = React.cloneElement(tempboard[first.i][j], {
                            ...tempboard[first.i][j].props,
                            piece: tempboard[first.i][j - 1].props.piece,
                            side: tempboard[first.i][j - 1].props.side,

                        })
                        const updatedElement2 = React.cloneElement(tempboard[first.i][j - 1], {
                            ...tempboard[first.i][j].props,
                            side: null,
                            piece: null,

                        })


                        tempboard[first.i][j] = updatedElement
                        tempboard[first.i][j + 1] = updatedElement2
                        let currentwhiteking1 = [first.i, j]
                        let currentblackking1 = [first.i, j]
                        //console.log(tempboard, "temp")
                        //console.log(color)

                        if (isyourkingincheck(tempboard, color, currentblackking1, currentwhiteking1)) {
                            return false
                        }

                    }
                    else {
                        //console.log("h yea h yeahsajkdhasjh")
                        return false
                    }
                    j -= 1
                }


                

                return true



            }
        }
    }
    if (board[first.i][first.j].props.piece === "\u265A") {
        if (board[first.i][first.j].props.empty && board[last.i][last.j].props.piece == "\u265C" && board[last.i][last.j].props.empty) {
            //castle king side
            //console.log("here i am")
            //console.log(last.i == 0 && last.j == 7 && board[last.i][last.j].props.piece == "\u265C" && board[last.i][last.j].props.empty)
            if (last.i == 0 && last.j == 7 && board[last.i][last.j].props.piece == "\u265C" && board[last.i][last.j].props.empty) {
                //console.log("vamos")
                let j = first.j + 1
                let tempboard = board.map(row => [...row]);
                let color = tempboard[first.i][first.j].props.side
                //console.log(color, color)
                while (j <= 6) {
                    //console.log(j)
                    if (tempboard[first.i][j].props.piece == null) {
                        const updatedElement = React.cloneElement(tempboard[first.i][j], {
                            ...tempboard[first.i][j].props,
                            piece: tempboard[first.i][j - 1].props.piece,
                            side: tempboard[first.i][j - 1].props.side,

                        })
                        const updatedElement2 = React.cloneElement(tempboard[first.i][j - 1], {
                            ...tempboard[first.i][j].props,
                            side: null,
                            piece: null,

                        })


                        tempboard[first.i][j] = updatedElement
                        tempboard[first.i][j - 1] = updatedElement2
                        let currentwhiteking1 = [first.i, j]
                        let currentblackking1 = [first.i, j]
                        //console.log(tempboard, "temp")
                        //console.log(color)

                        if (isyourkingincheck(tempboard, color, currentblackking1, currentwhiteking1)) {
                            return false
                        }

                    }
                    else {
                        //console.log("h yea h yeah")
                        return false
                    }
                    j += 1
                }


                return true



            }
            
            //castle queen side
            else if (last.i == 0 && last.j == 0 && board[last.i][last.j].props.piece == "\u265C" && board[last.i][last.j].props.empty) {
                //console.log("vamos")
                //console.log(first)
                let j = first.j - 1
                let tempboard = board.map(row => [...row]);
                let color = tempboard[first.i][first.j].props.side
                //console.log(color, color)
                while (j > 0) {
                    //console.log(j)
                    if (tempboard[first.i][j].props.piece == null) {
                        const updatedElement = React.cloneElement(tempboard[first.i][j], {
                            ...tempboard[first.i][j].props,
                            piece: tempboard[first.i][j - 1].props.piece,
                            side: tempboard[first.i][j - 1].props.side,

                        })
                        const updatedElement2 = React.cloneElement(tempboard[first.i][j - 1], {
                            ...tempboard[first.i][j].props,
                            side: null,
                            piece: null,

                        })


                        tempboard[first.i][j] = updatedElement
                        tempboard[first.i][j + 1] = updatedElement2
                        let currentwhiteking1 = [first.i, j]
                        let currentblackking1 = [first.i, j]
                        //console.log(tempboard, "temp")
                        //console.log(color)

                        if (isyourkingincheck(tempboard, color, currentblackking1, currentwhiteking1)) {
                            return false
                        }

                    }
                    else {
                        //console.log("h yea h yeahsajkdhasjh")
                        return false
                    }
                    j -= 1
                }


               

                return true




            }
        }
    }
}
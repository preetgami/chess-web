
import King from "./King";
import React from "react";
export function handleKingmovement(board, current, setBoard, setcurrent, setwhitetakes, setblacktakes, turn, setTurn, isyourkingincheck, setcurrentblackking, setcurrentwhiteking, currentblackking, currentwhiteking) {

    if (current.length === 2) {
        const updatedBoard = board.map(row => [...row]);


        let first = current[0];
        let last = current[1];



        if (!(first.i === last.i && first.j === last.j)) {
            //console.log(board[last.i][last.j], "frist")
            let goingtopeice = board[last.i][last.j].props.piece
            let goingtopeicecolor = board[last.i][last.j].props.side
            //console.log(board[first.i][first.j],"color")

            //check if is a white king
            //check valid king movement
            if (board[first.i][first.j].props.piece === "\u2654") {
                console.log(King(first, last, 6, goingtopeice, goingtopeicecolor, board), "white")
                console.log(goingtopeice, "in king")

                //check if king has moved and castling 
                if (board[first.i][first.j].props.empty && last.j == 7 && board[last.i][last.j].props.piece == "\u2656" && board[last.i][last.j].props.empty){
                    //castle king side
                    console.log("here i am")
                    console.log(last.i == 0 && last.j == 7 && board[last.i][last.j].props.piece == "\u265C" && board[last.i][last.j].props.empty)
                    if (last.i == 7 && last.j == 7 && board[last.i][last.j].props.piece == "\u2656" && board[last.i][last.j].props.empty
                        
                    ){
                        console.log("vamos")
                        let j=first.j+1
                        let tempboard = board.map(row => [...row]);
                        let color = tempboard[first.i][first.j].props.side
                        console.log(color,color)
                        while(j<=6){
                            console.log(j)
                            if (tempboard[first.i][j].props.piece == null){
                                const updatedElement = React.cloneElement(tempboard[first.i][j], {
                                    ...tempboard[first.i][j].props,
                                    piece: tempboard[first.i][j-1].props.piece,
                                    side: tempboard[first.i][j-1].props.side,

                                })
                                const updatedElement2 = React.cloneElement(tempboard[first.i][j-1], {
                                    ...tempboard[first.i][j].props,
                                    side: null,
                                    piece: null,

                                })


                                tempboard[first.i][j] = updatedElement
                                tempboard[first.i][j-1] = updatedElement2
                                let currentwhiteking1=[first.i,j]
                                let currentblackking1 = [first.i, j]
                                console.log(tempboard,"temp")
                                console.log(color )
                                
                                    if (isyourkingincheck(tempboard, color, currentblackking1, currentwhiteking1)) {
                                        return false
                                    }
                                
                            }
                            else{
                                console.log("h yea h yeah")
                                return false
                            }
                            j+=1
                        }
                        
                        
                        if (board[first.i][first.j].props.side === 'white' && turn != 1) {
                                return false
                        }
                       
                            console.log("Inside castle woow")
                            console.log(last,first)
                            console.log(board[last.i][last.j], board[first.i][first.j])
                            const updatedElement = React.cloneElement(board[last.i][last.j], {
                                ...board[last.i][last.j].props,
                               
                                empty: false

                            })
                            const updatedElement3 = React.cloneElement(board[last.i][last.j-1], {
                            ...board[last.i][last.j-1].props,
                            piece: null,
                            side: null,
                            empty: false

                        })
                        const updatedElement4 = React.cloneElement(board[last.i][first.j + 1], {
                            ...board[last.i][first.j + 1].props,
                            piece: null,
                            side: null,
                            empty: false

                        })
                            const updatedElement2 = React.cloneElement(board[first.i][first.j], {
                                ...board[first.i][first.j].props,
                                empty: false

                            })

                            updatedBoard[first.i][last.j - 1] = updatedElement2;


                            updatedBoard[last.i][first.j+1] = updatedElement;

                            updatedBoard[first.i][first.j] = updatedElement3;
                            updatedBoard[last.i][last.j] = updatedElement4;


                            setBoard(updatedBoard);
                            setcurrent([]);
                            setTurn(prev => prev == 1 ? 2 : 1)
                        

                            

                    }
                    //castle queen side
                    else if (last.i == 7 && last.j == 0 && board[last.i][last.j].props.piece == "\u2656" && board[last.i][last.j].props.empty) {
                        console.log("vamos")
                        console.log(first)
                        let j = first.j - 1
                        let tempboard = board.map(row => [...row]);
                        let color = tempboard[first.i][first.j].props.side
                        console.log(color, color)
                        while (j > 0) {
                            console.log(j)
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
                                tempboard[first.i][j +1] = updatedElement2
                                let currentwhiteking1 = [first.i, j]
                                let currentblackking1 = [first.i, j]
                                console.log(tempboard, "temp")
                                console.log(color)

                                if (isyourkingincheck(tempboard, color, currentblackking1, currentwhiteking1)) {
                                    return false
                                }

                            }
                            else {
                                console.log("h yea h yeahsajkdhasjh")
                                return false
                            }
                            j -= 1
                        }


                        if (board[first.i][first.j].props.side === 'white' && turn != 1) {
                            return false
                        }
                       
                        console.log("Inside castle woow")
                        console.log(last, first)
                        console.log(board[last.i][last.j], board[first.i][first.j])
                        const updatedElement = React.cloneElement(board[last.i][last.j+1], {
                            ...board[first.i][first.j + 1].props,
                            empty: false,
                            piece: board[first.i][last.j ].props.piece,
                            side: board[first.i][first.j ].props.peice

                        })
                        const updatedElement3 = React.cloneElement(board[last.i][last.j], {
                            ...board[last.i][last.j].props,
                            piece: null,
                            side: null,
                            empty: false

                        })
                        const updatedElement4 = React.cloneElement(board[first.i][first.j], {
                            ...board[first.i][first.j].props,
                            piece: null,
                            side: null,
                            empty: false

                        })
                        const updatedElement2 = React.cloneElement(board[first.i][first.j-2], {
                            ...board[first.i][first.j+2].props,
                            piece: board[first.i][first.j].props.piece,
                            side: board[first.i][first.j].props.side,
                            empty: false

                        })

                        updatedBoard[first.i][last.j + 2] = updatedElement2;


                        updatedBoard[last.i][first.j - 1] = updatedElement;

                        updatedBoard[first.i][first.j] = updatedElement4;
                        updatedBoard[last.i][last.j] = updatedElement3;

                        console.log("updated peice", updatedElement2)
                        setBoard(updatedBoard);
                        setcurrent([]);
                        setTurn(prev => prev == 1 ? 2 : 1)




                    }
                }

                else if (King(first, last, 6, goingtopeice, goingtopeicecolor, board)) {
                    if (board[first.i][first.j].props.side === 'white' && turn != 1) {
                        return false
                    }
                    console.log("In white")


                    if (board[last.i][last.j].props.piece != null) {
                        // console.log("here", board[last.i][last.j].props.piece)
                        let taken = board[last.i][last.j].props.piece
                        setwhitetakes(prev => [...prev, taken])

                    }
                    const updatedElement = React.cloneElement(board[last.i][last.j], {
                        ...board[last.i][last.j].props,
                        piece: board[first.i][first.j].props.piece,
                        side: board[first.i][first.j].props.side,
                        empty:false

                    })
                    const updatedElement2 = React.cloneElement(board[first.i][first.j], {
                        ...board[first.i][first.j].props,
                        side: null,
                        piece: null,
                        empty: true

                    })
                    setcurrentwhiteking([last.i,last.j])



                    updatedBoard[last.i][last.j] = updatedElement;
                    updatedBoard[first.i][first.j] = updatedElement2;

                    setBoard(updatedBoard);
                    setcurrent([]);
                    setTurn(prev => prev == 1 ? 2 : 1)
                }


            }
            else if (board[first.i][first.j].props.piece === "\u265A") {
                console.log(King(first, last, 1, goingtopeice, goingtopeicecolor, board), "black")
                if (board[first.i][first.j].props.empty && last.j == 7 && board[last.i][last.j].props.piece == "\u265C" && board[last.i][last.j].props.empty)  {
                    //castle king side
                    console.log("here i am")
                    console.log(last.i == 0 && last.j == 7 && board[last.i][last.j].props.piece == "\u265C" && board[last.i][last.j].props.empty)
                    if (last.i == 0 && last.j == 7 && board[last.i][last.j].props.piece == "\u265C" && board[last.i][last.j].props.empty

                    ) {
                        console.log("vamos")
                        let j = first.j + 1
                        let tempboard = board.map(row => [...row]);
                        let color = tempboard[first.i][first.j].props.side
                        console.log(color, color)
                        while (j <= 6) {
                            console.log(j)
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
                                console.log(tempboard, "temp")
                                console.log(color)

                                if (isyourkingincheck(tempboard, color, currentblackking1, currentwhiteking1)) {
                                    return false
                                }

                            }
                            else {
                                console.log("h yea h yeah")
                                return false
                            }
                            j += 1
                        }


                        if (board[first.i][first.j].props.side === 'white' && turn != 1) {
                            return false
                        }
                        if (board[first.i][first.j].props.side === 'black' && turn != 2) {
                            return false
                        }
                        console.log("Inside castle woow")
                        console.log(last, first)
                        console.log(board[last.i][last.j], board[first.i][first.j])
                        const updatedElement = React.cloneElement(board[last.i][last.j], {
                            ...board[last.i][last.j].props,

                            empty: false

                        })
                        const updatedElement3 = React.cloneElement(board[last.i][last.j - 1], {
                            ...board[last.i][last.j - 1].props,
                            piece: null,
                            side: null,
                            empty: false

                        })
                        const updatedElement4 = React.cloneElement(board[last.i][first.j + 1], {
                            ...board[last.i][first.j + 1].props,
                            piece: null,
                            side: null,
                            empty: false

                        })
                        const updatedElement2 = React.cloneElement(board[first.i][first.j], {
                            ...board[first.i][first.j].props,
                            empty: false

                        })

                        updatedBoard[first.i][last.j - 1] = updatedElement2;


                        updatedBoard[last.i][first.j + 1] = updatedElement;

                        updatedBoard[first.i][first.j] = updatedElement3;
                        updatedBoard[last.i][last.j] = updatedElement4;


                        setBoard(updatedBoard);
                        setcurrent([]);
                        setTurn(prev => prev == 1 ? 2 : 1)




                    }
                    //castle queen side
                    else if (last.i == 0 && last.j == 0 && board[last.i][last.j].props.piece == "\u265C" && board[last.i][last.j].props.empty) {
                        console.log("vamos")
                        console.log(first)
                        let j = first.j - 1
                        let tempboard = board.map(row => [...row]);
                        let color = tempboard[first.i][first.j].props.side
                        console.log(color, color)
                        while (j > 0) {
                            console.log(j)
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
                                console.log(tempboard, "temp")
                                console.log(color)

                                if (isyourkingincheck(tempboard, color, currentblackking1, currentwhiteking1)) {
                                    return false
                                }

                            }
                            else {
                                console.log("h yea h yeahsajkdhasjh")
                                return false
                            }
                            j -= 1
                        }


                        if (board[first.i][first.j].props.side === 'black' && turn != 2) {
                            return false
                        }

                        console.log("Inside castle woow")
                        console.log(last, first)
                        console.log(board[last.i][last.j], board[first.i][first.j])
                        const updatedElement = React.cloneElement(board[last.i][last.j + 1], {
                            ...board[first.i][first.j + 1].props,
                            empty: false,
                            piece: board[first.i][last.j].props.piece,
                            side: board[first.i][first.j].props.peice

                        })
                        const updatedElement3 = React.cloneElement(board[last.i][last.j], {
                            ...board[last.i][last.j].props,
                            piece: null,
                            side: null,
                            empty: false

                        })
                        const updatedElement4 = React.cloneElement(board[first.i][first.j], {
                            ...board[first.i][first.j].props,
                            piece: null,
                            side: null,
                            empty: false

                        })
                        const updatedElement2 = React.cloneElement(board[first.i][first.j - 2], {
                            ...board[first.i][first.j + 2].props,
                            piece: board[first.i][first.j].props.piece,
                            side: board[first.i][first.j].props.side,
                            empty: false

                        })

                        updatedBoard[first.i][last.j + 2] = updatedElement2;


                        updatedBoard[last.i][first.j - 1] = updatedElement;

                        updatedBoard[first.i][first.j] = updatedElement4;
                        updatedBoard[last.i][last.j] = updatedElement3;

                        console.log("updated peice", updatedElement2)
                        setBoard(updatedBoard);
                        setcurrent([]);
                        setTurn(prev => prev == 1 ? 2 : 1)




                    }
                }

                else if (King(first, last, 1, goingtopeice, goingtopeicecolor, board)) {
                    if (board[first.i][first.j].props.side === 'black' && turn != 2) {
                        return false
                    }

                    if (board[last.i][last.j].props.piece != null) {
                        let taken = board[last.i][last.j].props.piece
                        setblacktakes(prev => [...prev, taken])

                    }
                    const updatedElement = React.cloneElement(board[last.i][last.j], {
                        ...board[last.i][last.j].props,
                        piece: board[first.i][first.j].props.piece,
                        side: board[first.i][first.j].props.side,
                        empty: false


                    })
                    const updatedElement2 = React.cloneElement(board[first.i][first.j], {
                        ...board[first.i][first.j].props,
                        piece: null,
                        side: null,
                        empty: true



                    })

                    updatedBoard[last.i][last.j] = updatedElement;
                    updatedBoard[first.i][first.j] = updatedElement2;
                    setcurrentblackking([last.i, last.j])

                    setBoard(updatedBoard);
                    setcurrent([]);
                    setTurn(prev => prev == 1 ? 2 : 1)

                }


            }

        }
        //console.log((localStorage.getItem('white_2_pawn')),"w");
        //console.log((localStorage.getItem('black_2_pawn')), "b");

    }

}

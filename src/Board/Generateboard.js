//generate board
import Box from "../Box/Box"
export default function generateBoard(reveal) {
    const newB = []
    for (let i = 0; i < 8; i++) {
        let x = [];
        for (let j = 0; j < 8; j++) {
            
            if (i === 1) {
                x.push(<Box key={i + j} i={i} j={j} empty={true} piece={'\u265F'} reveal={reveal} side={"black"} />)
            }
            else if (i === 6) {
                x.push(<Box key={i + j} i={i} j={j} empty={true} piece={'\u2659'} reveal={reveal} side={"white"} />)

            }
            else {

                let piece = null;
                let side = null;
                
                if (i === 0 && (j === 0 || j === 7)) {
                    piece = '\u265C'; // Rook
                    side = "black"
                
                
                } else if (i === 2 && (j === 1 || j === 6)) {
                    piece = "\u265E"; // Knight
                    side = "black"

                } else if (i === 2 && (j === 2 || j === 5)) {
                    piece = "\u265D"; // Bishop
                    side = "black"

                } else if (i === 4 && j === 3) {
                    side = "black"
                    piece = "\u265B"; // Queen
                } else if (i === 0 && j === 4) {
                    piece = "\u265A"; // King
                    side = "black"

                } else if (i === 7 && (j === 0 || j === 7)) {
                    side = "white"
                    piece = "\u2656"; // Rook
                } else if (i ===3 && (j === 1 || j === 6)) {
                    side = "white"
                    piece = "\u2658"; // Knight
                } else if (i === 5 && (j === 2 || j === 5)) {
                    side = "white"
                    piece = "\u2657"; // Bishop
                } else if (i === 5 && j === 3) {
                    side = "white"
                    piece = "\u2655"; // Queen
                } else if (i === 7 && j === 4) {
                    side = "white"
                    piece = "\u2654"; // King
                }
                

                x.push(<Box key={i + j} i={i} j={j} empty={true} piece={piece} reveal={reveal} side={side} />)

            }

        }
        newB.push(x)

        }
        return newB;
    }
        


    

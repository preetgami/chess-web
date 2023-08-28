import { pawnviz } from "./pawnvis/pawnviz"
import { rookviz } from "./rookvis/rookviz"
import { bishopviz } from "./bishopviz/bishopviz"
import { knightviz } from "./knightviz/knightviz"
import { kingviz } from "./kingviz/kingviz" 
export function visualizeon(first, board, setBoard, isKingInCheck, Pawn, yourcolor, currentblackking, currentwhiteking,Rook,Bishop,Knight,King){

    //console.log(first)
    //pawn movement
    pawnviz(first, board, setBoard, isKingInCheck, Pawn, yourcolor, currentblackking, currentwhiteking)
    
    rookviz(first, board, setBoard, isKingInCheck, Rook, yourcolor, currentblackking, currentwhiteking)
    bishopviz(first, board, setBoard, isKingInCheck, Bishop, yourcolor, currentblackking, currentwhiteking) 
    knightviz(first, board, setBoard, isKingInCheck, Knight, yourcolor, currentblackking, currentwhiteking) 

    kingviz(first, board, setBoard, isKingInCheck, King, yourcolor, currentblackking, currentwhiteking) 



   
    
}
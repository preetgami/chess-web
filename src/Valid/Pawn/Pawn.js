
export default function Pawn(start, finish, row, goingtopeice,color) {
    //white pawn
    //is king in check? then return false automatically, addition param for check
    if (goingtopeice === "\u265A" || goingtopeice ==="\u2654"){
        return false
    }


    
    if (row===6){
        if (goingtopeice===null){
          //two jump allowed
            if(start.i===row){
                if (start.j===finish.j){
                    if (start.i - finish.i <= 2 && start.i - finish.i >0){
                        if (start.i - finish.i == 2){
                            localStorage.setItem('white_2_pawn', JSON.stringify(finish));
                        }
                        else{
                            localStorage.setItem('white_2_pawn', JSON.stringify(""));
                        }
                        return true
                    }
                }

            }
           
            else{
                //console.log("here", start.j === finish.j, localStorage.getItem("black_2_pawn") !== null || localStorage.getItem("black_2_pawn") !== "")

                
                if (start.j === finish.j) {
                    if (start.i - finish.i == 1 ) {
                        localStorage.setItem('white_2_pawn', JSON.stringify(""));

                        return true
                    }
            }
                else if (localStorage.getItem("black_2_pawn") !== null && localStorage.getItem("black_2_pawn") !== "") {
                    let blacklastmove = JSON.parse(localStorage.getItem("black_2_pawn"));
                    if (blacklastmove.i === start.i && (Math.abs(start.j - blacklastmove.j) === 1) && finish.j === blacklastmove.j) {
                        return true
                    }

                }
            }
           
        
        }
        //going to black
        else if (color=== "black"){
            //console.log("made it")
            if (Math.abs(start.j -finish.j)==1) {
                if (start.i - finish.i == 1) {
                    return true
                }
            }

        }
        return false

    }
    //black pawn
    else{
        if(goingtopeice==null){
        if (start.i === row) {
            if (start.j === finish.j) {
                if (finish.i - start.i <= 2 && finish.i - start.i > 0) {
                    if (finish.i-start.i==2){
                        
                        
                       

                        // Store the modified data back into localStorage
                        localStorage.setItem('black_2_pawn', JSON.stringify(finish));
                    }
                    else{
                        localStorage.setItem('black_2_pawn', JSON.stringify(""));

                    }
                    return true
                }
            }

        } else {
            if (start.j === finish.j) {
                if (finish.i - start.i == 1) {
                    localStorage.setItem('black_2_pawn', JSON.stringify(""));

                    return true
                }}
                else if (localStorage.getItem("white_2_pawn") !== null && localStorage.getItem("white_2_pawn") !== "") {
                    let whitelastmove = JSON.parse(localStorage.getItem("white_2_pawn"));
                    //console.log(whitelastmove)

                    if (whitelastmove.i === start.i && (Math.abs(start.j - whitelastmove.j) === 1) && finish.j === whitelastmove.j) {
                        return true
                    }

                }
            }
    }
    //going to white
        if (color === "white") {
            if (Math.abs(start.j - finish.j) == 1) {
                if (finish.i - start.i == 1) {
                    return true
                }
            }

        }
        return false


 }}
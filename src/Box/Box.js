import React, { useState } from 'react'
import "./Box.css"
function Box({ i, j, piece,empty,reveal,side}) {

    //i
    //j
    //peice
    //empty
    //
 
    //coloring logic
    let color = null;

    if (i%2!==0){
        //green
        if (j % 2 === 0) { color ="#53A257"}
        //light yellow
        else { color ="beige"}
    }else{
        if (j % 2 !== 0) { color = "#53A257"}
        else { color = "beige"}
    }

  return (

      <div className='box-dark' style={{ background: color }} onClick={() => reveal(i, j)}>{piece}</div>
      
  )
}

export default Box
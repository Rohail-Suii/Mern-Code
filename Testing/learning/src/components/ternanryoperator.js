import React from "react";
export default function Ternaryoperator() {
    const day = new Date().getDay();
    return(
      <div>
      { day === 0 || day === 6 ?  <weekend/> :  <weekday/>}
      </div>
    )
    
 };
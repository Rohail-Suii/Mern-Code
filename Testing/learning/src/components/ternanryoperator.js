import React from "react";
export default function Ternaryoperator() {
    const day = new Date().getDay();
    return(
      <div>
      { day === 0 || day === 6 ?  <h1>weekend</h1> :  <h1>weekdays</h1>}
      </div>
    )
    
 };
import React from "react";
function clickHandler(){
    console.log("Button Clicked")
}
// const Event = ()=>{
//     console.log("Button Clicked")
// }
function Event(){
    return(
        // <button onClick={clickHandler}>Click </button>
        // <button onMouseOver={clickHandler}>Click </button>
         <button onMouseOver={()=> console.log('second example')}>Click </button>
        
    )
}
export default Event;
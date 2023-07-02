import React from "react";
let darkModeOn=false;
const darkMode=<h1>Dark Mode</h1>
const lightMode=<h1>Light Mode</h1>
// if (darkModeOn==true) {
//     console.log("Dark Mode")
// }else{
//     console.log("Light Mode")
// }
const Events=()=>{
    return(
        <div>
        {darkModeOn ? darkMode : lightMode}
        <button onClick={()=>darkModeOn=!darkModeOn}>Click </button>
        </div>
    )
}
export default Events;
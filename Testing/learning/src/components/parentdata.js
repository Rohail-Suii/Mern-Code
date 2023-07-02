import React from "react";
import Childdata from "./Childdate";
const data = {
    heading : "This is a heading",
    call : "This is a call"
}

const Parentdata = ()=>{
    return(
        <div>
            <Childdata data={data}/>
        </div>
    )
}
export default Parentdata;
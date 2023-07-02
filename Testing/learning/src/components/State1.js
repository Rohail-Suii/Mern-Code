import { useState } from "react";

export default function State1() {
    const [inputtext, setinputtext] = useState("hello");
    
    return (
        <div>
            <input type="text" value={inputtext} onChange={(e)=>setinputtext(e.target.value)}/>
            <h1>You typed : {inputtext}</h1>
            <button onClick={()=>setinputtext("hello")}>Clear</button>
        </div>
    )
}
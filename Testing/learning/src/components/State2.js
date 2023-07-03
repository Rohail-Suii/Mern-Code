import { useState } from "react";

export default function State2() {
    const [time, settime] = useState(new Date().toLocaleTimeString());

    return(
        <div>
            <h1>{time}</h1>
            <button onClick={()=>settime(new Date().toLocaleTimeString())}>Get Time</button>
        </div>
    )
}


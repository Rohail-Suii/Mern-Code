import React from "react";

import { useState, useEffect } from "react";

export default function UseEffect1() {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        document.title = toggle ? "Welcome" : "Loading...";
    }, [toggle]);
    return(
        <div>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <h1>Welcome</h1>}
        </div>
    )
}
// imporper function
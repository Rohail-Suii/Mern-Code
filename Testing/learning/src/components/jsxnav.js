import React from "react";

const Jsxnav = (props)=>{
    const navStyle = {
        
        color: "white",
        backgroundColor: "black",
        padding: "10px",
        margin: "10px",
        borderRadius: "10px"

    }
    return(
        <nav className="main-nav" style={navStyle}>
            <ul>
                <li>{props.first}</li>
                <li>{props.second}</li>
                <li>{props.first}</li>
                <li>{props.second}</li>
            </ul>
        </nav>
    )
}
export default Jsxnav;
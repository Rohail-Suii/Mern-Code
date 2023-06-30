import React from "react";
function Header(props){
    console.log(props.name);
    return <h1>Hello {props.name} ,{props.color}</h1>
}
export default Header;

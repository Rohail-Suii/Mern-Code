import React from "react";

var number;
var num;
const Guess = () => {
    num = Math.floor(Math.random() * 10) + 1;
    number=document.getElementById("getText").value ;
    if (num === number) {
        console.log(num);
        <h1>Your guess right</h1>
    }
    else{
        console.log(number);
        console.log(num);
        // Guessjsx();
    } 
}
const Guessjsx = () => {
    return (
        <div>

            <input type="text" id="getText" placeholder="Guess a number" />
            
            <button onClick={Guess}>Guess</button>
            {
                number===num ? <h1>Correct</h1> : <h1>Incorrect</h1>
            }
           
        </div>
    )
}

export default Guessjsx;
export {Guess};
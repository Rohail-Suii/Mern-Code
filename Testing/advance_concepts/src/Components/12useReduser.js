import React, { useReducer } from "react";

const reducer = (state, action) => {
    switch(action.type){
        case "increment":
            return {money: state.money + 10}
        case "decrement":
            return {money: state.money - 10}
        default:
            return state
    }
}

export default function UseReducer1() {
    const [state,dispatch] = useReducer(reducer, {money: 100})

    return(
        <div>
            <h1>wallet : {state.money}</h1>
            <div>
                <button onClick={() => dispatch({type: "increment"})}>Add</button>
                <button onClick={() => dispatch({type: "decrement"})}>Remove</button>

            </div>
        </div>
    )
}
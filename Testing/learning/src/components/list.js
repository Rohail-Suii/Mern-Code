import React from "react";
const goal = [
    {id: 'cg1', text: 'Finish the course'},
    {id: 'cg2', text: 'Finish the course'},
    {id: 'cg3', text: 'Finish the course'}
]

const List = () =>{
    return(
        <ul>
            {
                goal.map(
                    goal=>{
                        return <li>{goal.text}</li>
                    }
                )
            }
        </ul>
    )
}
export default List;
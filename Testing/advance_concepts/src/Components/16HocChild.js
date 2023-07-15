import React from "react";

export default function FirstHoc  ()  {
    const user = {
        name: "John",
        email : "john@gmail.com"
    }
    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    )

}
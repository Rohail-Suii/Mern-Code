import React from "react";
import { useState } from "react";
export default function SignUp() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    // const [errorMessage, setErrorMessage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.length < 3) {

        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) =>setPassword(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="role">Role</label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
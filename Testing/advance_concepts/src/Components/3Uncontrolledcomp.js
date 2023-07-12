import React, { useRef } from "react";

export default function Uncontrolledcomp() {
    const Form = () => {
        const inputRef = useRef(null);
        const handleSubmit = (e) => {
            const value = inputRef.current.value;
        }
        return (
            <form onSubmit={handleSubmit}>
                <input type="text" ref={inputRef} />
            </form >
        )
    }
}
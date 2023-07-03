import React, {useState ,createContext,useContext } from "react";

const AppContext = createContext(null);

export default function Parent() {
    const [username, setUserName] = useState("John Doe");

    return (
        <AppContext.Provider value={{ username, setUserName }}>
            <Child1 />
            <Child2 />
        </AppContext.Provider>
    );
}

export const Child1 = () => {
    const {username} = useContext(AppContext);
    return <h1>{username}</h1>
}

export const Child2 = () => {
    const {setUserName} = useContext(AppContext);
    return(
        <div>
            <button onClick={()=>setUserName("Rohail")}>Change Name</button>
        </div>
    )
}
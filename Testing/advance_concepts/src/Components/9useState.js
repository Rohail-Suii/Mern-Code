import { useState } from "react"; 
 
export default function App() { 
  const [greeting, setGreeting] = useState({ greet: "Hello" });
    const updateGreeting = () => {
        const updatedGreeting = { ...greeting };
        updatedGreeting.greet = "Hola";
        setGreeting(updatedGreeting);
    };
  return ( 
    <div> 
      <h1>{greeting.greet}</h1> 
      <button onClick={updateGreeting}>Update greeting</button> 
    </div> 
  ); 
} 
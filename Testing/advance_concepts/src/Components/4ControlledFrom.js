import React ,{useState} from "react";

export default function ControlledFrom() {
    const [inputVal,setInputVal] = useState('');
    const handlechange = (e) => {
        setInputVal(e.target.value);
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        setInputVal('');
        console.log(inputVal);
    }
    return(
        <div>
            <form onSubmit={handlesubmit}>
                <label htmlFor="namei">Enter Name</label>
                <input id="namei" name="name" type="text" value={inputVal} onChange={handlechange}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

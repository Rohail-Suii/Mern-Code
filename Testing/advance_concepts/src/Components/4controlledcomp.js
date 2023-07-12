import React ,{ useState }from "react";

export default function Controlledcomp() {
    
        const [value,setvalue] = useState('');
        const handleSubmit = (e) => {
            setvalue(e.target.value);
        }
        return (
            <form>
                <input type="text" value={value} onChange={handleSubmit} />
            </form>
        )
    
}
/*The input starts out with an empty string: “”
You type “a” and handleChange gets an “a” attached in the event object, as e.target.value, and subsequently
 calls setValue with it. The input is then updated to have the value of “a”. 
You type “b” and handleChange gets called with e.target.value being “ab”.and sets that to the state.
 That gets set into the state. The input is then re-rendered once more, now with value = "ab" .
This flow pushes the value changes to the form component instead of pulling like the ref example from
 the uncontrolled version. Therefore, the Form component always has the input's current value without
  needing to ask for it explicitly.*/
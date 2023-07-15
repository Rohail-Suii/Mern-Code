import React from "react";

export default function UseRef1() {
  const forminput = React.useRef(null);
  const focusinput = () => {
    forminput.current.focus();
    //document.querySelector("input").focus();
  };
  return (
    <div>
      <h1>UseRef1</h1>
      <input ref={forminput} type="text" />
      <button onClick={focusinput}>Focus</button>
    </div>
  );
}

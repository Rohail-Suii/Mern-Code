import React from "react";
import "../App.css";

const Button = ({ children, backgrpoundcolor }) => {
  return (
    <button style={{ backgroundColor: backgrpoundcolor }}>{children}</button>
  );
};
const Alert = ({ children }) => {
  return (
    <>
      <div className="Overlay" />
      <div className="Alert">{children}</div>
    </>
  );
};

const DeleteButton = () => {
  return <Button backgrpoundcolor="red">Delete</Button>;
};
export default function Composition1() {
  return (
    <div className="App">
      <header>logo</header>
      <Alert>
        <h1>Delete</h1>
        <p>Are you sure?</p>
        <DeleteButton />
      </Alert>
    </div>
  );
}

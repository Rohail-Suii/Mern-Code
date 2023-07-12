import logo from "./logo.svg";
import "./App.css";
import Map from "./Components/1map";
import DessertsList from "./Components/2maplist";
import ControlledFrom from "./Components/4ControlledFrom";
function App() {
  return (
    <div className="App">
      {/* <h2>List of low calorie desserts:</h2>
      <DessertsList /> */}
      <ControlledFrom />
    </div>
  );
}

export default App;

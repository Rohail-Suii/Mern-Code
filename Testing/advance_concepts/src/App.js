import logo from "./logo.svg";
import "./App.css";
import Map from "./Components/1map";
import DessertsList from "./Components/2maplist";
import ControlledFrom from "./Components/4ControlledFrom";
import RatingForm from "./Components/5ratingFrom";
import FeedbackForm from "./Components/6gptfrom";
import SignUp from "./Components/7SignUp";
function App() {
  return (
    <div className="App">
      {/* <h2>List of low calorie desserts:</h2>
      <DessertsList /> */}
      {/* <ControlledFrom /> */}
      {/* <RatingForm /> */}
      {/* <FeedbackForm /> */}
      <SignUp />
    </div>
  );
}

export default App;

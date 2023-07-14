import logo from "./logo.svg";
import "./App.css";
import Map from "./Components/1map";
import DessertsList from "./Components/2maplist";
import ControlledFrom from "./Components/4ControlledFrom";
import RatingForm from "./Components/5ratingFrom";
import FeedbackForm from "./Components/6gptfrom";
import SignUp from "./Components/7SignUp";
import UseEffect1 from "./Components/10useEffect";
import FirstFetch from "./Components/11fetch";
function App() {
  return (
    <div className="App">
      {/* <h2>List of low calorie desserts:</h2>
      <DessertsList /> */}
      {/* <ControlledFrom /> */}
      {/* <RatingForm /> */}
      {/* <FeedbackForm /> */}
      {/* <SignUp /> */}
      {/* <UseEffect1 /> */}
      <FirstFetch />
    </div>
  );
}

export default App;

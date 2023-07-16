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
import UseReducer1 from "./Components/12useReduser";
import UseRef1 from "./Components/13useRef";
import Composition1 from "./Components/14composition";
import WithLoader from "./Components/15HOC";
import FirstHoc from "./Components/16HocChild";

import PanelMouseLogger from "./Components/17Hoc1_PanelMouse";
import PointMouseLogger from "./Components/18Hoc1PointMouse";


// const FirstHocWithLoader = WithLoader(FirstHoc);
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
      {/* <FirstFetch /> */}
      {/* <UseReducer1 /> */}
      {/* <UseRef1 /> */}
      {/* <Composition1 /> */}
      {/* <FirstHocWithLoader /> */}

      <header className="Header">Little Lemon Restaurant 🍕</header>
      <PanelMouseLogger />
      <PointMouseLogger />

    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Jsxnav from './components/jsxnav';
import Embeddedjsx from './components/embeddedjsx';
import Event from './components/event';
import Events from './components/events';
import Guess from './components/guess';
import Guessjsx from './components/guess';

function App() {
  return (
    <>
       {/* <Jsxnav first="Home" second="About" third="Contact" fourth="Blog"/>
      <p>{Embeddedjsx("Rohail","Ahmed")}</p>
      <Event/>
      <Events/>  */}
      <Guessjsx/>
      {/* <Guess/> */}
      
    </>
    
  );
}

export default App;

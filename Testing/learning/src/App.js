import logo from './logo.svg';
import './App.css';
import Jsxnav from './components/jsxnav';
import Embeddedjsx from './components/embeddedjsx';
import Event from './components/event';
import Events from './components/events';
import Guess from './components/guess';
import Guessjsx from './components/guess';
import Parentdata from './components/parentdata';
import State1 from './components/State1';
import State2 from './components/State2';
import  Parent  from './components/contextapi';

function App() {
  return (
    <>
       {/* <Jsxnav first="Home" second="About" third="Contact" fourth="Blog"/>
      <p>{Embeddedjsx("Rohail","Ahmed")}</p>
      <Event/>
      <Events/>  */}
      {/* <Guessjsx/> */}
      {/* <Guess/> */}
      {/* <Parentdata/> */}
      {/* <State1/> */}
      <State2/>
      <Parent/>
    </>
    
  );
}

export default App;

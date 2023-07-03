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
import Homepage from './components/Homepage';
import About from './components/about';
import { Routes,Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Ternaryoperator from './components/ternanryoperator';
import crow from './components/assests/imgs/crow.jpg';
import Videoplayer from './components/videopalyer';

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
      {/* <State2/>
      <Parent/> */}
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes> */}
      {/* <Ternaryoperator/>
      <img src={crow} alt="crow" height={200}/>
      <img src={require('./components/assests/imgs/crow.jpg')} alt="crow" height={200}/> */}
      <Videoplayer/>
    </>
    
  );
}

export default App;

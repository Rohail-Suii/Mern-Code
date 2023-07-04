import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter ,
  Routes,
  Switch,
  Redirect,
  Route
} from "react-router-dom";
import User from './user/pages/user';
function App(){
  return(
    
    <BrowserRouter>
    <switch>
    <Routes>
      <Route path="/" element={<User />} />
    </Routes>
    <Routes>
      <Route path="/" element={<User />} />
    </Routes>
    <Redirect to="/" />
    </switch>
  </BrowserRouter>
  )   
};

export default App;

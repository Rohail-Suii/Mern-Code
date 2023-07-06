import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter ,
  Routes,
  Switch,
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
    </switch>
  </BrowserRouter>
  )   
};

export default App;

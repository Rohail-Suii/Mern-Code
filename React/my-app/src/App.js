import React from 'react';
import { Routes, Switch, Route} from 'react-router-dom';
import User from './user/pages/user';
function App(){
  return(
    
    <Routes>
      <Route path="/" exact>
        <User/>
      </Route>
      {/* <Redirect to="/"/> */}
    </Routes>
  )   
};

export default App;

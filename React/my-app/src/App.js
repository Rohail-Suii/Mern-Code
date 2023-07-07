import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";

import User from "./user/pages/user";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from "./shared/components/Navigation/MainNavigation";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
         
            <Route path="/" element={<User />} exact>
              
            </Route>

            <Route path="/:userId/places" element={<UserPlaces />} exact>
            
          </Route>
            <Route path="/places/new"  element={<NewPlace />} exact>
              
            </Route>
            
    
        </Routes>
      </main>
    </Router>
  );
};

export default App;

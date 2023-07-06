import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Switch, Route } from "react-router-dom";
import User from "./user/pages/user";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <switch>
          <Routes>
            <Route path="/" element={<User />} />
          </Routes>
        </switch>
      </main>
    </BrowserRouter>
  );
}

export default App;

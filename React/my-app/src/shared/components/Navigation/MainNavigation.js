import React from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import './MainNavigation.css';

const MainNavigation = props => {
  return (
    <MainHeader>
      <button className="main-navigation__menu-btn">
        {/* 3 span are hamburger menu icon */}
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation__title">
        <Link to="/">YourPlaces</Link>
      </h1>
      {/* nav links later */}
      <nav>
        <NavLinks/>
      </nav>
    </MainHeader>
  );
};

export default MainNavigation;

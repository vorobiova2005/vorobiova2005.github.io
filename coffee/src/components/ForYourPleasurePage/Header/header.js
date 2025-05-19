import React from 'react';
import { Link } from 'react-router-dom';
import beans_logo from '../../../img/beans_logo_white.svg';
import logo from '../../../img/coffee-beans.png';
import './header.css'; 

const Header = () => {
  return (
    <header className="hero for-your-pleasure">
      <div className="header-container">
        <Link to="/" 
        className="logo-link">
          <img src={logo} alt="Coffee House Logo" className="logo" />
        </Link>

        <nav className="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Coffee house
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/our-coffee" className="nav-link">
                Our coffee
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/for-your-pleasure" className="nav-link">
                For your pleasure
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <h1>For your pleasure</h1>
    </header>
  );
};

export default Header;
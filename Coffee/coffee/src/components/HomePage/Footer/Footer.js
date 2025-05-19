import React from 'react';
import {Link} from "react-router-dom";

import footer_logo from '../../../img/group_black.png';
import beans_logo_black from '../../../img/beans_logo.svg';

import './footer.css';

const Footer = () => {
  return (
 <footer className="footer">
      <div className="footer-container">
        <Link to="/" className="footer-logo-link">
          <img src={footer_logo} alt="Coffee House Logo" className="footer-logo" />
        </Link>

        <nav className="footer-menu">
          <ul className="footer-list">
            <li className="footer-item">
              <Link to="/" className="footer-nav-link"> 
                Coffee house
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/our-coffee" className="footer-nav-link">
                Our coffee
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/for-your-pleasure" className="footer-nav-link">
                For your pleasure
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <img  className='beans_logo_black' src={beans_logo_black} alt="beans_logo" />
      </div>
    </footer>
  );
};

export default Footer;
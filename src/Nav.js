import React, { useState, useEffect } from 'react';
import './Nav.css';
import SearchIcon from './icons/search.png';
import HamburgerIcon from './icons/hamburger.png';

function Nav() {
  const [show, handleShow] = useState(false);

  // Navbar background changes on scroll down
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <ul className="navbar__nav">
        <li className="nav__item">
          <a href="#">
            <h1 className="nav__logo">movieStillsAi</h1>
          </a>
        </li>
        <li className="nav__right">
          {/* <li 
            className="nav__item has__search">
              <a href="#">
                <img className="nav__avatar" src={SearchIcon} alt="Search"/>
              </a>
          </li> */}
          <li 
            className="nav__item has__dropdown">
            <a href="#">
              <img className="nav__avatar" src={HamburgerIcon} alt="Menu"/>
            </a>
            <ul className="dropdown">
              <li className='dropdown-item' href="#Analysis">Analysis</li>
              <li className='dropdown-item'>Palette</li>
              <li className='dropdown-item'>Compare</li>
            </ul>
          </li>
        </li>
      </ul>
    </div>
  )
}

export default Nav

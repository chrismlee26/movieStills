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

  // This is the rendered navbar as JSX
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <h1
        className="nav__logo">
        movieStillsAi
      </h1>
      
      <img
        className="nav__avatar"
        src={SearchIcon} 
        alt=""
      />
      <img
        className="nav__avatar"
        src={HamburgerIcon} 
        alt=""
      />
    </div>
  )
}

export default Nav

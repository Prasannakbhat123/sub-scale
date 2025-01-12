import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Import both Menu and X icons
import '../css/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo logo_div">
        <img src="assets/images/logo.png" alt="Logo" />
        <p className="logo_text zindex">Ares</p>
      </div>

      {/* Hamburger menu using Lucide Icons */}
      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        {isMenuOpen ? (
          <X size={30} color="#ffffff" /> // Cross icon when menu is open
        ) : (
          <Menu size={30} color="#ffffff" /> // Hamburger icon when menu is closed
        )}
      </div>

      {/* Nav links */}
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Ares</a></li>
        <li><a href="#contact">Subsystem</a></li>
        <li><a href="#contact">Team</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

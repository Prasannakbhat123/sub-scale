import React, { useState } from 'react';
import { Menu } from 'lucide-react'; // Import the Menu icon from lucide-react
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
        <Menu size={30} color="#333" /> {/* Lucide Menu Icon */}
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

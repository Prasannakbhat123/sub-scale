import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Import both Menu and X icons
import '../css/Navbar.css';
import { Link, useNavigate } from 'react-router-dom'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path, hash) => {
    if (window.location.pathname !== path) {
      navigate(path);
      setTimeout(() => {
        if (hash) {
          document.getElementById(hash.substring(1)).scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      if (hash) {
        document.getElementById(hash.substring(1)).scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="logo logo_div" onClick={() => handleNavigation('/', '')}>
        <img src="assets/images/main_logo.png" alt="Logo" />
        {/* <p className="logo_text zindex">Ares</p> */}
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
        <li><a href="#home" onClick={() => handleNavigation('/', '')}>Home</a></li>
        <li><a href="#about" onClick={() => handleNavigation('/', '#about')}>About</a></li>
        <li><Link to="/ares" onClick={() => handleNavigation('/ares')}>Ares</Link></li>
        <li><a href="#subsystem" onClick={() => handleNavigation('/', '#subsystem')}>Subsystem</a></li>
        <li><Link to="/team" onClick={() => handleNavigation('/team')}>Team</Link></li>
        <li><Link to="/contact" onClick={() => handleNavigation('/contact')}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

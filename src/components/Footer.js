import React from 'react';
import '../css/Footer.css';
import { Link } from 'react-router-dom'; 

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        {/* First Column: Logo and Text */}
        <div className="footer-logo">
          <div className="logo-text">
            <img src="assets/images/footer_logo.png" alt="Logo" className="footer-logo-img" />
            <p className="footer-text">Project Ares</p>
          </div>

          {/* Social Icons - SVGs below Logo and Text */}
          <div className="social-icons">
            <a href="#" className="social-icon">
              {/* Add your SVG here */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="social-icon">
              {/* Add your SVG here */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
               
            </a>
            <a href="#" className="social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="#" className="social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>

        {/* Second Column: Navigation Links */}
        <div className="footer-nav">
            <h3 className='footer-nav-heading'>Links</h3>
          <ul>
          <li><Link to="/">Home</Link></li>
        <li><a href="/#about">About</a></li>
        <li><Link to="/ares">Ares</Link></li>
        <li><a href="#subsystem">Subsystem</a></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        {/* Third Column: Contact Us and Email Input */}
        <div className="footer-contact">
          <h3 className='footer-contact-heading'>Contact Us</h3>
          <p>Phone: 9384018427</p>
          <p>Email: contact@projectares.com</p>
          <input type="email" placeholder="Enter your email" className="email-input" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

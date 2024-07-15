// Footer.jsx

import React from 'react';
import '../style/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <Link to="/aboutus">About Us</Link>
        <Link to="/contactus">Contact Us</Link>
        <Link to="/terms">Terms of Service</Link>
        <Link to="/privacy">Privacy Policy</Link>
      </div>
      <div className="copyright">
        &copy; 2024 Alisha Awal. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

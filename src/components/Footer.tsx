import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-section">
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/sponsored-pros">Sponsored Pros</Link>
        <Link to="/terms">Terms &amp; Conditions</Link>
      </div>
      <div className="footer-section">
        <Link to="/collections">Collections</Link>
        <Link to="/accessories">Accessories</Link>
        <Link to="/cart">Cart</Link>
      </div>
      <div className="footer-section">
        <span>Jacob Skate Co.</span>
        <span>Tel Aviv, Israel</span>
      </div>
    </div>
    <div className="footer-bottom">
      <span className="footer-brand">JACOB</span>
      <span>© {new Date().getFullYear()} Jacob Skate Co. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;

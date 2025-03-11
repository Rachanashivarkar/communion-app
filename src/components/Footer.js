import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; // Import the CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Section - About */}
        

        {/* Middle Section - Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        {/* Right Section - Contact Info */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: support@communionapp.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Location: New York, USA</p>
        </div>
      </div>

      {/* Bottom Copyright Text */}
      <div className="footer-bottom">
        <p>© 2025 Communion App. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

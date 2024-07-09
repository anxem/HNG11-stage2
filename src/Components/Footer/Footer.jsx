import React, { useState, useEffect } from "react";
import "./Footer.css";

import footerlogo from "../Assets/logo-footer.png";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="footer-section">
      <div className="footer-right">
        <div className="footer-logo">
          <img src={footerlogo} alt="wendy luxury logo" />
        </div>
        <div class="icon-footer-link">
          <i class="fas fa-truck"></i>
          <p>+234 908 340 1491</p>
        </div>

        <div class="icon-footer-link">
          <i class="fas fa-truck"></i>
          <p>info@wendyluxury.com</p>
        </div>

        <div class="icon-footer-link">
          <i class="fas fa-truck"></i>
          <p>Lagos, Nigeria.</p>
        </div>
      </div>
      <div className="footer-center">
        <div>Shop</div>
        <ul>
          <li>Product</li>
          <li>Check Out</li>
          <li>My Account</li>
        </ul>
      </div>
      <div className="footer-left">
        <div>Information</div>
        <ul>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="footer-last">
        © {currentYear} All Rights Reserved Wendy Luxury
      </div>
    </div>
  );
};

export default Footer;

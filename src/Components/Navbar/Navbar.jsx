import React, { useState } from "react";
import "./Navbar.css";

import logo from "../Assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="wendy luxury logo" />
      </div>

      <div className={isOpen ? "nav-links open" : "nav-links"}>
        <ul>
          <li>
            <Link className={location.pathname === "/" ? "active" : ""} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className={location.pathname === "/products" ? "active" : ""}
              to="/products"
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              className={location.pathname === "/cart" ? "active" : ""}
              to="/cart"
            >
              Cart
            </Link>
          </li>
          <li>
            <Link
              className={location.pathname === "/checkout" ? "active" : ""}
              to="/checkout"
            >
              Check Out
            </Link>
          </li>
          <li>
            <Link
              className={location.pathname === "/myaccount" ? "active" : ""}
              to="/myaccount"
            >
              My Account
            </Link>
          </li>
        </ul>

        <Link to="/contactus">
          <button>Contact Us</button>
        </Link>
      </div>

      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={isOpen ? "line line1 open" : "line line1"}></div>
        <div className={isOpen ? "line line2 open" : "line line2"}></div>
        <div className={isOpen ? "line line3 open" : "line line3"}></div>
      </div>
    </div>
  );
};

export default Navbar;

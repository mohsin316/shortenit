import "./Navbar.css";

// images
import Logo from "../assets/logo.svg";
import Toggle from "../assets/icon-hamburger.svg";
import Close from "../assets/icon-close.svg";

// hooks
import { useState } from "react";

export default function Navbar() {
  const [open, isOpen] = useState(false);

  return (
    <div className="container nav-container">
      <a href="#" className="logo">
        <img src={Logo} alt="main-logo" />
      </a>
      <button
        className="mobile-toggle"
        onClick={() => isOpen(!open)}
        style={{ backgroundImage: open ? `url(${Close})` : `url(${Toggle})` }}
      >
        <span className="visually-hidden">Menu</span>
      </button>
      <nav>
        <ul className={`primary-navigation  ${open ? "" : "hide"}`}>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Sign Up</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

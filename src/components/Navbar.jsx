import "./Navbar.css";

// images
import Logo from "../assets/logo.svg";
import Toggle from "../assets/icon-hamburger.svg";
import Close from "../assets/icon-close.svg";

// hooks
import { useState } from "react";
import { motion as m } from "framer-motion";

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
            <m.a
              whileHover={{ color: open ? "" : "#111" }}
              whileFocus={{ color: open ? "" : "#111" }}
              href="#"
            >
              Features
            </m.a>
          </li>
          <li>
            <m.a
              whileHover={{ color: open ? "" : "#111" }}
              whileFocus={{ color: open ? "" : "#111" }}
              href="#"
            >
              Pricing
            </m.a>
          </li>
          <li>
            <m.a
              whileHover={{ color: open ? "" : "#111" }}
              whileFocus={{ color: open ? "" : "#111" }}
              href="#"
            >
              Resources
            </m.a>
          </li>
          <li>
            <m.a
              whileHover={{ color: open ? "" : "#111" }}
              whileFocus={{ color: open ? "" : "#111" }}
              href="#"
            >
              Login
            </m.a>
          </li>
          <m.li
            whileHover={{ opacity: open ? "" : 0.5 }}
            whileFocus={{ opacity: open ? "" : 0.5 }}
          >
            <m.a
              whileHover={{ opacity: open ? "" : 0.5 }}
              whileFocus={{ opacity: open ? "" : 0.5 }}
              href="#"
            >
              Sign Up
            </m.a>
          </m.li>
        </ul>
      </nav>
    </div>
  );
}

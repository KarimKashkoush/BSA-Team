import { NavLink } from "react-router-dom";
import { useState } from "react";

import "./header.css";
import logo from '../../assets/images/logo.png'
export default function Header() {
  const [openNav, setOpenNav] = useState("");
  const [showNav, setShowNav] = useState("");
  return (
    <section className="header">
      <section className="container">
        <NavLink to="/" className="logo">
          <img src={logo} alt="logo" />
        </NavLink>

        <button
          id="nav-icon1"
          className={`open-nav ${openNav}`}
          onClick={() => {
            if (openNav === "open") {
              setOpenNav("");
              setShowNav("");
            } else {
              setOpenNav("open");
              setShowNav("showNav");
            }
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <section className={`nav ${showNav}`}>
          <ul>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/joinTheTeam">join</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
}

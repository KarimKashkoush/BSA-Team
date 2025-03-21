import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./header.css";
import logo from '../../assets/images/logo.png'
import { light, dark } from '../../state/themeSlice';

export default function Header() {
  const { theme } = useSelector((state) => state.themeSlice);

  const dispatch = useDispatch();

  const [openNav, setOpenNav] = useState("");
  const [showNav, setShowNav] = useState("");

  const nav = () => {
    if (openNav === "open") {
      setOpenNav("");
      setShowNav("");
    } else {
      setOpenNav("open");
      setShowNav("showNav");
    }
  }

  return (
    <section className="header">
      <section className="container">
        <NavLink to="/" className="logo">
          <img src={logo} alt="logo" />
        </NavLink>


        <button onClick={() => { theme === 'light' ? dispatch(dark()) : dispatch(light()) }}><i className="fa-solid fa-cloud-sun"></i></button>

        <button
          id="nav-icon1"
          className={`open-nav ${openNav}`}
          onClick={() => {
            nav()
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <section className={`nav ${showNav}`}>
          <ul>
            <li>
              <NavLink to="/events" onClick={() => { nav() }}>events</NavLink>
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
}

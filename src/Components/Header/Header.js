import React, { useState } from "react";
import "./Header.css";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

function Header() {
  const [toggleValue, setToggleValue] = useState(false);
  const toggleAction = () => {
    const value = toggleValue;
    setToggleValue(!value);
  };

  return (
    <div className="header">
      <div className="header__container container">
        <div className="header__content">
          <div className="header__logo">
            N<span>L</span>
          </div>
          <div className="header__toggle" onClick={toggleAction}>
            <FaBars className="toggleIcon" />
          </div>
        </div>

        <nav
          className={`header__navbar ${
            toggleValue === true ? "show-navbar" : "hide-navbar"
          }`}
        >
          <ul className="header__navbar--list">
            <li className="header__navbar--item">
              <Link
                className="header__navbar--link btn"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={10}
                duration={700}
              >
                Home
              </Link>
            </li>
            <li className="header__navbar--item">
              <Link
                className="header__navbar--link btn"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={10}
                duration={700}
              >
                About
              </Link>
            </li>
            <li className="header__navbar--item">
              <Link
                className="header__navbar--link btn"
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={10}
                duration={700}
              >
                Skills
              </Link>
            </li>
            <li className="header__navbar--item">
              <Link
                className="header__navbar--link btn"
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={10}
                duration={700}
              >
                Projects
              </Link>
            </li>
            <li className="header__navbar--item">
              <Link
                className="header__navbar--link btn"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={700}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Nav() {
  return (
    <>
      <nav id="nav">
        <div className="nav-wrapper">
          <h1 className="nav-wrapper__logo">
            <img
              src={require("../images/logo.svg")}
              alt="Ming-Jin(MJ) logo"
              onClick={scrollToTop}
            ></img>
          </h1>
          <ul className="nav-wrapper__menu">
            <li className="nav-wrapper__item">
              <Link
                activeClass="text-color-main"
                to="about"
                spy={true}
                smooth={true}
                offset={-65}
                duration={500}
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li className="nav-wrapper__item">
              <Link
                activeClass="text-color-main"
                to="skills"
                spy={true}
                smooth={true}
                offset={-65}
                duration={500}
                onClick={toggleMenu}
              >
                Skills
              </Link>
            </li>
            <li className="nav-wrapper__item">
              <Link
                activeClass="text-color-main"
                to="projects"
                spy={true}
                smooth={true}
                offset={-65}
                duration={500}
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            <li className="nav-wrapper__item">
              <Link
                activeClass="text-color-main"
                to="contact"
                spy={true}
                smooth={true}
                offset={-65}
                duration={500}
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>

          <button className="nav-wrapper__toggle " onClick={toggleMenu}>
            <span></span>
          </button>
        </div>
      </nav>
    </>
  );
}

function toggleMenu() {
  document.querySelector(".nav-wrapper__menu").classList.toggle("open");
  document.querySelector(".nav-wrapper__toggle").classList.toggle("open");
}

function scrollToTop() {
  scroll.scrollToTop({ duration: 500 });
}

export default Nav;

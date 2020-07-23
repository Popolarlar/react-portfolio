import React from "react";

function Nav() {
  return (
    <>
      <nav id="nav">
        <div className="nav-wrapper">
          <h1 className="nav-wrapper__logo">
            <a href="#top">
              <img
                src={require("../images/logo.svg")}
                alt="Ming-Jin(MJ) logo"
              ></img>
            </a>
          </h1>
          <ul className="nav-wrapper__menu">
            <li className="nav-wrapper__item">
              <a href="#about" onClick={() => toggleMenu()}>
                About
              </a>
            </li>
            <li className="nav-wrapper__item">
              <a href="#skills" onClick={() => toggleMenu()}>
                Skills
              </a>
            </li>
            <li className="nav-wrapper__item">
              <a href="#projects" onClick={() => toggleMenu()}>
                Projects
              </a>
            </li>
            <li className="nav-wrapper__item">
              <a href="#contact" onClick={() => toggleMenu()}>
                Contact
              </a>
            </li>
          </ul>

          <a className="nav-wrapper__toggle" onClick={() => toggleMenu()}>
            <span></span>
          </a>
        </div>
      </nav>
    </>
  );
}
function toggleMenu() {
  document.querySelector(".nav-wrapper__menu").classList.toggle("open");

  document.querySelector(".nav-wrapper__toggle").classList.toggle("open");
}

export default Nav;

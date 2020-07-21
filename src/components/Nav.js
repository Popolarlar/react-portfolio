import React from "react";

function Nav() {
  return (
    <>
      <nav id="nav">
        <div className="nav-wrapper">
          <h1 className="nav-wrapper__logo">
            <a>Img</a>
          </h1>
          <ul className="nav-wrapper__menu">
            <li className="nav-wrapper__item">
              <a href="#about">About</a>
            </li>
            <li className="nav-wrapper__item">
              <a href="#skills">Skill</a>
            </li>
            <li className="nav-wrapper__item">
              <a href="#projects">Project</a>
            </li>
            <li className="nav-wrapper__item">
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <a className="nav-wrapper__toggle" onClick={() => toggleNav()}>
            <span></span>
          </a>
        </div>
      </nav>
    </>
  );
}

function toggleNav() {
  document.querySelector(".nav-wrapper__menu").classList.toggle("open");

  document.querySelector(".nav-wrapper__toggle").classList.toggle("open");
}

export default Nav;

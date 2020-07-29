import React from "react";
import { animateScroll as scroll } from "react-scroll";
import NavItem from "./NavItem";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

function NavBar() {
  const { t } = useTranslation("navbar");

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
            <NavItem item={t("about")} toLink="about" toggle={toggleMenu} />
            <NavItem item={t("skills")} toLink="skills" toggle={toggleMenu} />
            <NavItem
              item={t("projects")}
              toLink="projects"
              toggle={toggleMenu}
            />
            <NavItem item={t("contact")} toLink="contact" toggle={toggleMenu} />
            <LanguageSelector/>
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

export default NavBar;

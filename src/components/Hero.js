import React from "react";
import { Link } from "react-scroll";

function Hero() {
  return (
    <>
      <div id="hero" className="jumbotron">
        <div className="container">
          <h1 className="hero-title load-hidden">
            Hi, I'm <span className="text-color-main">Ming-Jin</span>,
            <br />a Front-end Developer <br />
            with Full Stack aspirations.
          </h1>
          <p className="hero-cta load-hidden">
            <Link
              activeClass="text-color-main"
              to="about"
              spy={true}
              smooth={true}
              offset={-65}
              duration={500}
              className="cta-btn cta-btn--hero"
            >
              Find out more
            </Link>
            {/* <a className="cta-btn cta-btn--hero" href="#about">
              Find out more
            </a> */}
          </p>
        </div>
      </div>
    </>
  );
}
export default Hero;

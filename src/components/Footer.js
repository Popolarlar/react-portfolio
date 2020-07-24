import React from "react";
import { animateScroll as scroll } from "react-scroll";

function Footer() {
  return (
    <>
      <footer className="footer navbar-static-bottom">
        <div className="container">
          <button className="back-to-top" onClick={()=>scroll.scrollToTop({ duration: 500 })}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
          </button>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/ming-jin-yeh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin fa-inverse"></i>
            </a>
            <a
              href="https://github.com/Popolarlar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-github fa-inverse"></i>
            </a>
            {/* <a
              href="https://www.instagram.com/potl28326/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-instagram fa-inverse"></i>
            </a> */}
          </div>

          <hr />

          <p className="footer__text">Jin's Portfolio © 2020 Copyright</p>
        </div>
      </footer>
    </>
  );
}
export default Footer;

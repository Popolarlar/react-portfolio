import React from 'react';

function Footer() {
  return (
    <React.Fragment>
    <footer className="footer navbar-static-bottom">
      <div className="container">
        <a href="#top" className="back-to-top">
          <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
        </a>
        <div className="social-links">
          <a href="#!" target="_blank">
            <i className="fa fa-twitter fa-inverse"></i>
          </a>
          <a href="#!" target="_blank">
            <i className="fa fa-codepen fa-inverse"></i>
          </a>
          <a href="#!" target="_blank">
            <i className="fa fa-linkedin fa-inverse"></i>
          </a>
          <a href="#!" target="_blank">
            <i className="fa fa-github fa-inverse"></i>
          </a>
        </div>

        <hr />

        <p className="footer__text">
          © 2020 - created by Jin
        </p>
      </div>
    </footer>
    </React.Fragment>
  );
}
export default Footer;
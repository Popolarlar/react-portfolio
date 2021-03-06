import React from "react";

function About() {
  return (
    <>
      <section id="about">
        <div className="container">
          <h2 className="section-title">About me</h2>
          <div className="row about-wrapper">
            <div className="col-md-6 col-sm-12">
              <div className="about-wrapper__image">
                <img
                  className="img-fluid rounded shadow-lg"
                  height="auto"
                  width="300px"
                  src={require("../images/profile.jpg")}
                  alt="Profile"
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  I’m a passionate front-end developer who enjoys building
                  products which provide exceptional user experiences. Most
                  recently, I built an e-commerce website for a Melbourne-based
                  wine retailer.
                </p>
                <p className="about-wrapper__info-text">
                  I'm constantly learning and love losing track of time
                  investigating new technologies and solving problems. Check out
                  the projects I've worked on below and feel free to get in
                  touch!
                </p>
                <span className="d-flex mt-3">
                  <a
                    target="_blank"
                    className="cta-btn cta-btn--resume"
                    href={require("../Resume - Ming-Jin Yeh.pdf")}
                    rel="noopener noreferrer"
                  >
                    View Resume
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;

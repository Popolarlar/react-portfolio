import React from 'react';

function About() {
  return (
    <>
     <section id="about">
      <div className="container">
        <h2 className="section-title">
          About me
        </h2>
        <div className="row about-wrapper">
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__image">
              <img
                className="img-fluid rounded shadow-lg"
                height="auto"
                width="300px"
                src={require('../images/profile.jpg')}
                alt="Profile"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__info">
              <p className="about-wrapper__info-text">
                I’m Jin, a passionate front-end developer currently looking for opportunities in Melbourne. I enjoy building products that provide exceptional user experience. Most recently, I've worked on an e-commence website related to winery retailer.
              </p>
              <p className="about-wrapper__info-text">
              I'm always trying to grow and learn something new. I lose track of time when I'm digging in new technologies, solving unusual problems, or exploring new recipe in my kitchen. Please don't hesitate to reach out— I'm happy to chat about work or play!
              </p>
              <span className="d-flex mt-3">
                <a target="_blank" className="cta-btn cta-btn--resume" href="#!">
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
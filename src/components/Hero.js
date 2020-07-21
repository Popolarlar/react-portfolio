import React from 'react';

function Hero() {
  return (
  <>
  <div id="hero" className="jumbotron">
    <div className="container">
      <h1 className="hero-title load-hidden">
      Hi, my name is <span className="text-color-main">MJ</span>
      <br />
      I'm the Unknown Developer.
      </h1>
    <p className="hero-cta load-hidden">
      <a className="cta-btn cta-btn--hero" href="#about">Know more</a>
    </p>
    </div>
  </div>
  </>
  );
}
export default Hero;
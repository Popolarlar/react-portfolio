import React from 'react';

function Contact() {
  return (
    <React.Fragment>
    <section id="contact">
    <div className="container">
      <h2 className="section-title">
        Contact
      </h2>
      <div className="contact-wrapper">
        <p className="contact-wrapper__text">
          ming.jin.yeh@gmail.com
        </p>
        <a
          target="_blank"
          className="cta-btn cta-btn--resume"
          href="mailto:ming.jin.yeh@gmail.com"
          rel="noopener noreferrer" 
          >Call to Action</a
        >
      </div>
    </div>
    </section>
    </React.Fragment>
  );
}
export default Contact;
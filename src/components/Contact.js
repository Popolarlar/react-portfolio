import React from "react";
import { useTranslation } from "react-i18next";
// import React, { useState } from "react";
// import emailjs from "emailjs-com";

function Contact() {
  const { t } = useTranslation("contact");
  // const [state, setState] = useState({
  //   name: '',
  //   email: '',
  //   message: ''
  // });

  // const [result, setResult] = useState(null);

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   console.log("submit!")

  //   // code to trigger Sending email
  // };

  // const handleChange = event => {
  //   const { name, value } = event.target;

  //   setState({
  //     ...state,
  //     [name]: value
  //   });
  // };

  return (
    <>
      <section id="contact">
        <div className="container">
          <h2 className="section-title">{t("title")}</h2>
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              <i className="far fa-envelope"></i>
              ming.jin.yeh@gmail.com
            </p>
            <p className="contact-wrapper__text">
              <i className="fas fa-mobile-alt"></i>0423 563 220
            </p>

            <a
              target="_blank"
              className="cta-btn cta-btn--resume"
              href="mailto:ming.jin.yeh@gmail.com"
              rel="noopener noreferrer"
            >
              {t("button-call-to-action")}
            </a>
          </div>
          {/* <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name<input type="text" name="name" value={state.name} onChange={handleChange}/></label>
            </div>

            <div className="form-group">
              <label>Email
              <input type="email" name="email" value={state.email} onChange={handleChange}/>
              </label>
            </div>

            <div className="form-group">
              <label>message
              <input type="text" name="message" value={state.message} onChange={handleChange}/>
              </label>
            </div>

            <input type="submit" value="Say Hi"/>
          </form> */}
        </div>
      </section>
    </>
  );
}

export default Contact;

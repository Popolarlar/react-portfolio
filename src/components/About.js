import React from "react";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation("about");

  return (
    <>
      <section id="about">
        <div className="container">
          <h2 className="section-title">{t("title")}</h2>
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
                <p className="about-wrapper__info-text">{t("paragragh1")}</p>
                <p className="about-wrapper__info-text">{t("paragragh2")}</p>
                <span className="d-flex mt-3">
                  <a
                    target="_blank"
                    className="cta-btn cta-btn--resume"
                    href={require("../Resume - Ming-Jin Yeh.pdf")}
                    rel="noopener noreferrer"
                  >
                    {t("button-view-resume")}
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

import React from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation("hero");
  return (
    <>
      <div id="hero" className="jumbotron">
        <div className="container">
          <h1 className="hero-title load-hidden">
            {t("title-line1.hi")}
            <span className="text-color-main">{t("title-line1.name")}</span>
            ,
            <br />
            {t("title-line2")}
            <br />
            {t("title-line3")}
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
              {t("button-find-out-more")}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
export default Hero;

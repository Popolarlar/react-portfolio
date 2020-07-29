import React from "react";
import { useTranslation } from "react-i18next";

function Project(props) {
  const { t } = useTranslation("projects");

  return (
    <>
      <div className="row">
        <div className="col-lg-4 col-sm-12">
          <div className="project-wrapper__text">
            <h3 className="project-wrapper__text-title">
              {t(`${props.project.name}.title`)}
            </h3>

            <div>
              <p className="mb-4">{t(`${props.project.name}.desc`)}</p>
            </div>
            <a
              target="_blank"
              className="cta-btn cta-btn--hero"
              href={props.project.liveUrl}
              rel="noopener noreferrer"
              style={
                props.project.liveUrl === ""
                  ? { display: "none" }
                  : { display: "inline-block" }
              }
            >
              {t("button-see-live")}
            </a>
            <a
              target="_blank"
              // className="cta-btn text-color-main"
              className="cta-btn cta-btn--hero"
              href={props.srcUrl}
              rel="noopener noreferrer"
              style={
                props.project.srcUrl === ""
                  ? { display: "none" }
                  : { display: "inline-block" }
              }
            >
              {t("button-src")}
            </a>
          </div>
        </div>
        <div className="col-lg-8 col-sm-12">
          <div className="project-wrapper__image">
            <a
              // href={props.project.liveUrl}
              href={props.project.liveUrl === "" ? "" : props.project.liveUrl}
              target={props.project.liveUrl === "" ? "" : "_blank"}
              // target="_blank"
              rel="noopener noreferrer"
              className={props.project.liveUrl === "" ? "disable" : ""}
            >
              <div className="thumbnail rounded">
                <img
                  className="img-fluid"
                  src={props.project.imgUrl}
                  alt="Project"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;

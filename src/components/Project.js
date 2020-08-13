import React from "react";

function Project(props) {
  return (
    <>
      <div className="row">
        <div className="col-lg-4 col-sm-12">
          <div className="project-wrapper__text">
            <h3 className="project-wrapper__text-title">
              {props.project.title}
            </h3>

            <div>
              <p className="mb-4">{props.project.desc}</p>
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
              See Live
            </a>
            <a
              target="_blank"
              className="cta-btn text-color-main"
              // className="cta-btn cta-btn--hero"
              href={props.project.srcUrl}
              rel="noopener noreferrer"
              style={
                props.project.srcUrl === ""
                  ? { display: "none" }
                  : { display: "inline-block" }
              }
            >
              Source Code
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

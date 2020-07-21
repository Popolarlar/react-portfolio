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
              className={`cta-btn cta-btn--hero ${props.project.liveUrl === "" ? "disable":""}`} 
              href={props.project.liveUrl}
              rel="noopener noreferrer"
            >
              See Live
            </a>
            <a
              target="_blank"
              className={`cta-btn text-color-main ${props.project.srcUrl === "" ? "disable":""}`}
              href={props.project.srcUrl}
              rel="noopener noreferrer"
            >
              Source Code
            </a>
          </div>
        </div>
        <div className="col-lg-8 col-sm-12">
          <div className="project-wrapper__image">
            <a
              href={props.project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={props.project.liveUrl === "" ? "disable":""}
            >
              <div data-tilt className="thumbnail rounded">
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

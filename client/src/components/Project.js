import React from 'react';

function Project() {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-lg-4 col-sm-12">
          <div className="project-wrapper__text">
            <h3 className="project-wrapper__text-title">
              Personal Portfolio Site
            </h3>

            <div>
              <p className="mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Excepturi neque, ipsa animi maiores repellendus distinctio
                    aperiam earum dolor voluptatum consequatur blanditiis
                    inventore debitis fuga numquam voluptate ex architecto
                    itaque molestiae.
                  </p>
                </div>
                <a target="_blank" className="cta-btn cta-btn--hero" href="#!">
                  See Live
                </a>
                <a target="_blank" className="cta-btn text-color-main" href="#!">
                  Source Code
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12">
              <div className="project-wrapper__image">
                <a href="#!" target="_blank">
                  <div data-tilt className="thumbnail rounded">
                    <img className="img-fluid" src={require('../images/project.jpg')} alt="Project"/>
                  </div>
                </a>
              </div>
            </div>
          </div>
    </React.Fragment>
  );
}

export default Project;
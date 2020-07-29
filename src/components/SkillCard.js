import React from "react";

function SkillCard(props) {
  return (
    <>
      <div className="col-md-4 col-sm-12">
        <div className="skills-wrapper__card">
          <h3 className="skills-wrapper__card--title">{props.name}</h3>

          <div className="skills-wrapper__card--grid">
            {props.skills.map((skill, key) => (
              <div key={key}>
                <img
                  src={require(`../images/logo/128px-${skill}.png`)}
                  alt="JavaScript Logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillCard;

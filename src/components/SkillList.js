import React from "react";
import SkillCard from "./SkillCard";

const frontend = {
  name: "Frontend Stack",
  skills: ["JavaScript", "React", "Sass", "Bootstrap"],
};
const backend = {
  name: "Backend Stack",
  skills: ["Nodejs", "Laravel", ".NETCore", "PostgreSQL"],
};
const devTool = {
  name: "Development Tools",
  skills: ["Git", "AWS"],
};

function SkillList() {
  return (
    <>
      <section id="skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="row skills-wrapper">
            <SkillCard skills={frontend} />
            <SkillCard skills={backend} />
            <SkillCard skills={devTool} />
          </div>
        </div>
      </section>
    </>
  );
}

export default SkillList;

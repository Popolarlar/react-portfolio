import React from "react";
import { useTranslation } from "react-i18next";
import SkillCard from "./SkillCard";

const frontend = ["JavaScript", "React", "Sass", "Bootstrap"];
const backend = ["Nodejs", "Laravel", ".NETCore", "PostgreSQL"];
const devTool = ["Git", "AWS"];

function SkillList() {
  const { t } = useTranslation("skills");

  return (
    <>
      <section id="skills">
        <div className="container">
          <h2 className="section-title">{t("title")}</h2>
          <div className="row skills-wrapper">
            <SkillCard name={t("sub-front-end")} skills={frontend} />
            <SkillCard name={t("sub-back-end")} skills={backend} />
            <SkillCard name={t("sub-dev-tool")} skills={devTool} />
          </div>
        </div>
      </section>
    </>
  );
}

export default SkillList;

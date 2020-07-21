import React from "react";
import Project from "./Project";
const portfolio = {
  title: "Personal Portfolio Website",
  desc: "This is a SPA built with React.",
  liveUrl: "http://popolarlar.github.io/react-portfolio",
  srcUrl: "https://github.com/Popolarlar/react-portfolio",
  imgUrl: require("../images/project/portfolio.png"),
};

const onePlatform = {
  title: "Winery E-commence Website",
  desc:
    "This is a winery B2B e-commence website built with PHP Laravel and PostgreSQL.",
  liveUrl: "http://www.1-platform.com.au/",
  srcUrl: "",
  imgUrl: require("../images/project/1platform.png"),
};

const onlineBanking = {
  title: "Online Banking Website",
  desc: "This is a online banking website built with ASP.NET core using C#.",
  liveUrl: "https://github.com/Popolarlar/banking-web-app",
  srcUrl: "https://github.com/Popolarlar/banking-web-app",
  imgUrl: require("../images/project/onlinebanking.png"),
};

function ProjectList() {
  return (
    <>
      <section id="projects">
        <div className="container">
          <div className="project-wrapper">
            <h2 className="section-title dark-blue-text">Projects</h2>
            <Project project={portfolio} />
            <Project project={onePlatform} />
            <Project project={onlineBanking} />
          </div>
        </div>
      </section>
    </>
  );
}
export default ProjectList;

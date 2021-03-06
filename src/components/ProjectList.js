import React from "react";
import Project from "./Project";
// const portfolio = {
//   title: "Personal Portfolio Website",
//   desc: "This is a SPA built with React.",
//   liveUrl: "http://popolarlar.github.io/react-portfolio",
//   srcUrl: "https://github.com/Popolarlar/react-portfolio",
//   imgUrl: require("../images/project/portfolio.png"),
// };

const onePlatform = {
  title: "Winery B2B E-commerce Website",
  desc: "Built with PHP Laravel and PostgreSQL.",
  liveUrl: "http://www.1-platform.com.au/",
  srcUrl: "",
  imgUrl: require("../images/project/1platform.png"),
};

const onlineBanking = {
  title: "Online Banking Website",
  desc: "Built with ASP.NET core using C# (work in progress).",
  // liveUrl: "https://github.com/Popolarlar/banking-web-app",
  liveUrl: "",
  srcUrl: "https://github.com/Popolarlar/banking-web-app",
  imgUrl: require("../images/project/onlinebanking.png"),
};

const javascript30 = {
  title: "JavaScript 30 Day Challange",
  desc: "Build something everyday using VanillaJS without a library.",
  liveUrl: "https://popolarlar.github.io/JavaScript30",
  srcUrl: "https://github.com/Popolarlar/JavaScript30",
  imgUrl: require("../images/project/javascript30.png"),
};

const todolist = {
  title: "MERN Stack To Do List App",
  desc:
    "A full-stack app built with MongoDB, Express, React and Node, hosted on Heroku.",
  liveUrl: "https://powerful-bastion-47949.herokuapp.com/",
  srcUrl: "https://github.com/Popolarlar/react-todo-list",
  imgUrl: require("../images/project/todolist.png"),
};

const youTubeClone = {
  title: "Material UI YouTube Clone",
  desc: "A Responsive layout using Material UI.",
  liveUrl: "https://popolarlar.github.io/react-material-ui-youtube-clone/",
  srcUrl: "https://github.com/Popolarlar/react-material-ui-youtube-clone",
  imgUrl: require("../images/project/youTubeClone.png"),
};

function ProjectList() {
  return (
    <>
      <section id="projects">
        <div className="container">
          <div className="project-wrapper">
            <h2 className="section-title dark-blue-text">Projects</h2>
            {/* <Project project={portfolio} /> */}
            <Project project={onePlatform} />
            <Project project={youTubeClone} />
            <Project project={javascript30} />
            <Project project={todolist} />
            <Project project={onlineBanking} />

            <p className="section-title dark-blue-text">
              More projects coming soon
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default ProjectList;

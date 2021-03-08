import React from "react";
import s from "./Projects.module.css";
import styleContainer from "../common/styles/Container.module.css";
import Project from "./Project/Project";

type SkillType = {
  title: string;
  description: string;
  link?: string;
  imageLink?: string;
};

const skillsList: Array<SkillType> = [
  {
    title: "Social Network",
    description: "Social network single page application",
    link: "socialnetwork",
    imageLink:
      "https://cdn3.wpbeginner.com/wp-content/uploads/2017/08/socialnetworkbuddypress.png"
  },
  {
    title: "Todolist",
    description: "Todolist SPA with multiple manageable todolists",
    link: "todolist",
    imageLink:
      "https://thumbs.dreamstime.com/b/to-do-list-flat-design-concept-icon-logo-dark-background-white-to-do-list-flat-design-concept-icon-logo-dark-133647677.jpg"
  }
];

function Projects() {
  return (
    <div className={s.projectsBlock}>
      <div className={`${styleContainer.container} ${s.projectsContainer}`}>
        <h2 className={s.title}>Projects</h2>
        <div className={s.projects}>
          {skillsList.map((item) => {
            return (
              <Project
                key={item.title}
                title={item.title}
                description={item.description}
                link={item.link}
                imageLink={item.imageLink}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;

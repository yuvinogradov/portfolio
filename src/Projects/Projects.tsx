import React from "react";
import s from "./Projects.module.css";
import styleContainer from "../common/styles/Container.module.css";
import Project from "./Project/Project";

type SkillType = {
  title: string;
  description: string;
};

const skillsList: Array<SkillType> = [
  { title: "HTML", description: "Experienced HTML professional" },
  { title: "JS", description: "Talented JavaScript developer" },
  { title: "React", description: "Inspired React programmer" }
];

function Projects() {
  return (
    <div className={s.projectsBlock}>
      <div className={`${styleContainer.container} ${s.projectsContainer}`}>
        <h2 className={s.title}>Projects</h2>
        <div className={s.projects}>
          {skillsList.map((item) => {
            return (
              <Project title={item.title} description={item.description} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;

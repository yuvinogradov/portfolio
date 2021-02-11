import React from "react";
import s from "./Skills.module.css";
import styleContainer from "../common/styles/Container.module.css";
import Skill from "./Skill/Skill";

type SkillType = {
  title: string;
  description: string;
};

const skillsList: Array<SkillType> = [
  { title: "HTML", description: "Experienced HTML professional" },
  { title: "JS", description: "Talented JavaScript developer" },
  { title: "React", description: "Inspired React programmer" },
  { title: "React", description: "Inspired React programmer" },
  { title: "React", description: "Inspired React programmer" },
  { title: "React", description: "Inspired React programmer" },
  { title: "React", description: "Inspired React programmer" },
  { title: "React", description: "Inspired React programmer" },
  { title: "React", description: "Inspired React programmer" },
  { title: "React", description: "Inspired React programmer" },
  { title: "React", description: "Inspired React programmer" },
  { title: "React", description: "Inspired React programmer" },
  { title: "React", description: "Inspired React programmer" }
];

function Skills() {
  return (
    <div className={s.skillsBlock}>
      <div className={`${styleContainer.container} ${s.skillsContainer}`}>
        <h2 className={s.title}>Skills</h2>
        <div className={s.skills}>
          {skillsList.map((item) => {
            return (
              <Skill title={item.title} description={item.description}></Skill>
            );
          })}
          {/* <Skill
            title={"CSS"}
            description={"super cascades style sheets professional"}
          ></Skill>
          <Skill title={"JS"} description={"javascript expert"}></Skill>
          <Skill
            title={"React"}
            description={"Ultra uno react developer"}
          ></Skill> */}
        </div>
      </div>
    </div>
  );
}

export default Skills;

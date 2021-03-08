import React from "react";
import s from "./Skills.module.css";
import styleContainer from "../common/styles/Container.module.css";
import Skill from "./Skill/Skill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faHtml5,
  faCss3,
  faGit,
  faCss3Alt
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

type SkillType = {
  title: string;
  description: string;
  icon: typeof faReact;
};

const skillsList: Array<SkillType> = [
  {
    title: "HTML5",
    icon: faHtml5,
    description: "Experienced HTML professional"
  },
  { title: "JS", icon: faJs, description: "Talented JavaScript developer" },
  { title: "React", icon: faReact, description: "Inspired React programmer" },
  { title: "CSS3", icon: faCss3Alt, description: "" },
  { title: "Git", icon: faGit, description: "" }
];

function Skills() {
  return (
    <div className={s.skillsBlock}>
      <div className={`${styleContainer.container} ${s.skillsContainer}`}>
        <h2 className={s.title}>Skills</h2>
        <div className={s.skills}>
          {skillsList.map((item) => {
            return (
              <Skill
                key={item.title}
                title={item.title}
                icon={item.icon}
                description={item.description}
              ></Skill>
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

import React from "react";
import s from "./Skill.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faReact } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Skill(props: any) {
  return (
    <div className={s.skill}>
      <div className={s.iconContainer}>
        <FontAwesomeIcon
          className={s.icon}
          icon={props.icon}
          // style={{ width: "100%", height: "100%" }}
        />
      </div>
      <h3>{props.title}</h3>
      <span className={s.description}>{props.description}</span>
    </div>
  );
}

export default Skill;

import React from "react";
import s from "./Main.module.css";
import styleContainer from "../common/styles/Container.module.css";

function Main() {
  return (
    <div className={s.mainBlock}>
      <div className={`${styleContainer.container} ${s.container}`}>
        <div className={s.text}>
          <span>Hi there!</span>
          <h1>I am Yury Vinogradov</h1>
          <p>A front-end developer</p>
        </div>
        <div className={s.photo}></div>
      </div>
    </div>
  );
}

export default Main;

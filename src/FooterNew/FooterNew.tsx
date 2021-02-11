import React from "react";
import s from "./FooterNew.module.css";
import Nav from "../Nav/Nav";

function FooterNew() {
  return (
    <div className={s.footerBlock}>
      <div className={s.footerContainer}>
        <Nav />
      </div>
    </div>
  );
}

export default FooterNew;

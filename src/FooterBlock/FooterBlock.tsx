import React from "react";
import s from "./FooterBlock.module.css";
import Nav from "../Nav/Nav";

function FooterBlock() {
  return (
    <div className={s.footerBlock}>
      <div className={s.footerContainer}>
        <Nav />
      </div>
    </div>
  );
}

export default FooterBlock;

import React from "react";
import s from "./ContactsForm.module.css";
import styleContainer from "../common/styles/Container.module.css";

export default function ContactsForm() {
  return (
    <div className={s.ContactsFormBlock}>
      <div className={`${styleContainer.container} ${s.ContactsFormContainer}`}>
        <h2 className={s.title}>Contact me</h2>
        <form>
            <input type="text" placeholder={"Name"} />
            <input type="text" placeholder={"Email"} />
            <textarea  placeholder={'Message'}/>
            <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

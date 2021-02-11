import React from "react";
import s from "./ContactsForm.module.css";
import styleContainer from "../common/styles/Container.module.css";

export default function ContactsForm() {
  return (
    <div className={s.ContactsFormBlock}>
      <div className={`${styleContainer.container} ${s.ContactsFormContainer}`}>
        <h2 className={s.title}>Contact me</h2>
        <form>
          <div>
            {" "}
            <input type="text" placeholder={"Name"} />
          </div>
          <div>
            <input type="text" placeholder={"Email"} />
          </div>
          <div>
            <input type="textarea" />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

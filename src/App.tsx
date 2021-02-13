import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import ContactsForm from "./ContactsForm/ContactsForm";
import FooterBlock from "./FooterBlock/FooterBlock";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Projects />
      <ContactsForm />
      <FooterBlock />
    </div>
  );
}

export default App;

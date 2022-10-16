import React from "react";
import Header from "./components/Layout/Header";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Projects />
      <AboutMe />
      <Contact />
    </React.Fragment>
  );
}

export default App;

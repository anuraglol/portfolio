import type { NextPage } from "next";

import { Header, Contact, About, Projects, Skills } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <a id="about">
        <About />
      </a>
      <a id="skills">
        <Skills />
      </a>
      <a id="projects">
        <Projects />
      </a>
      <a id="contact">
        <Contact />
      </a>
    </>
  );
};

export default Home;

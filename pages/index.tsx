import type { NextPage } from "next";

import { Header, About, Projects, Skills, Contact } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Header />
    </>
  );
};

export default Home;

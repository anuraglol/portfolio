import type { NextPage } from "next";

import { Header, About, Projects, Skills, Contact } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;

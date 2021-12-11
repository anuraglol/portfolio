import type { NextPage } from "next";

import { Header, Contact, About, Projects, Skills } from "../components";

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

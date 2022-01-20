import type { NextPage } from "next";

import { Header, About, Projects, Skills, Contact } from "../components";

const Home: NextPage = () => {
  return (
    <div className="px-[22rem]">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;

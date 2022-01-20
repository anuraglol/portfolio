import type { NextPage } from "next";

import { Header, About, Projects, Skills } from "../components";

const Home: NextPage = () => {
  return (
    <div className="px-[22rem]">
      <Header />
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;

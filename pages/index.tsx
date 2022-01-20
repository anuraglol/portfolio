import type { NextPage } from "next";

import { Header, About, Projects } from "../components";

const Home: NextPage = () => {
  return (
    <div className="px-[22rem]">
      <Header />
      <About />
      <Projects />
    </div>
  );
};

export default Home;

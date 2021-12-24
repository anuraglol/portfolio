import type { NextPage } from "next";

import { Header, About, Projects } from "../components";

const Home: NextPage = () => {
  return (
    <>
     <Header />
     <About />
     <Projects />
    </>
  );
};

export default Home;

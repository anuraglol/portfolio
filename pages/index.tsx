import type { NextPage } from "next";

import { Header, About, Projects, Skills } from "../components";

const Home: NextPage = () => {
  return (
    <>
     <Header />
     <About />
     <Skills />
     {/* <Projects /> */}
    </>
  );
};

export default Home;

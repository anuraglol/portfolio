import type { NextPage } from "next";

import {
  Header,
  About,
  Projects,
  Skills,
  Contact,
  Footer,
} from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;

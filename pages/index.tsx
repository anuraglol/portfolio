import type { NextPage } from "next";

import { Header, Contact, About } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <About />
      <Contact />
    </>
  );
};

export default Home;

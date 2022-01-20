import type { NextPage } from "next";

import { Header, About } from "../components";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen min-w-screen bg-primary px-[22rem]">
      <Header />
      <About />
    </div>
  );
};

export default Home;

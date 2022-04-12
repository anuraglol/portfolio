import type { NextPage } from "next";

import {
  Header,
  About,
  Projects,
  Skills,
  Contact,
  NowPlaying,
} from "../components";

const Home: NextPage = () => {
  return (
    <div className="px-2 sm:px-8 md:px-24 lg:px-48 xl:px-72">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <div className="flex justify-center">
        <NowPlaying />
      </div>
    </div>
  );
};

export default Home;

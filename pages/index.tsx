import type { NextPage } from "next";
import { HiArrowSmUp } from "react-icons/hi";
import { useState, useEffect } from "react";

import {
  Header,
  About,
  Projects,
  Skills,
  Contact,
  Footer,
} from "../components";

const Home: NextPage = () => {
  const [topOfPage, setTopOfPage] = useState<boolean>();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        setTopOfPage(false);
      } else {
        setTopOfPage(true);
      }
    });
  }, []);

  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      {/* <button
        className={`h-14 w-14 m-4 rounded-md bg-arrow text-white font-medium animate-reveal flex items-center justify-center cursor-pointer float-right z-50 shadow-lg hover:shadow-xl duration-100  fixed bottom-3 right-3 ${
          topOfPage && "hidden"
        }`}
        onClick={() => window.scrollTo(0, 0)}
        aria-label="back-to-top"
      >
        <HiArrowSmUp size={50} />
      </button> */}
    </>
  );
};

export default Home;

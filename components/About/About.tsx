import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

const About = () => {
  return (
    <div
      className="min-w-screen font-inter px-2 py-4 my-16 flex justify-center flex-col"
      id="about"
    >
      <p className="text-6xl font-bold text-gray-700 text-center">
        Hey, I&apos;m Anurag
      </p>
      <p className="md:text-2xl text-lg text-gray-600 text-center my-8">
        Hey there, I&apos;m a Frontend Developer based in India. <br />
        I&apos;m mainly focused on Frontend Development, and I also write blogs
        and design sometimes. <br />
        Apart from coding, I love listening to music!
      </p>
      <p className="flex justify-center">
        <Link href="https://github.com/kr-anurag" passHref>
          <a
            className="text-xl w-72 text-white font-medium px-4 py-3 rounded-full flex items-center justify-center bg-gradient-to-r from-[#12c2e9] via-[#c471ed] to-[#f64f59] shadow-xl hover:bg-gradient-to-l duration-100"
            aria-label="github-account"
            target="blank"
          >
            Checkout my Github
            <IoIosArrowForward />
          </a>
        </Link>
      </p>
    </div>
  );
};

export default About;

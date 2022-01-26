import Image from "next/image";
import Link from "next/link";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <div className="font-sen my-8 flex flex-row items-center justify-between px-3">
      <div>
        <p className="text-3xl font-bold text-white">Anurag</p>
        <p className="mt-1 text-lg font-medium text-gray-300">
          Frontend Developer, Blogger and a Student
        </p>

        <p className="mt-4 text-gray-400">
          Building Web apps, proficient in Frontend. Writing articles <br /> on
          my blog sometimes.
        </p>

        <Link href="https://blog.anurag.tech" passHref>
          <a
            className="font-jost mt-4 flex cursor-pointer flex-row items-center gap-1 text-xl text-gray-400 duration-100 hover:ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read my Blog
            <HiOutlineArrowNarrowRight />
          </a>
        </Link>

        <Link href="https://discord.gg/XJe67pCa8k" passHref>
          <a
            className="font-jost mt-4 flex cursor-pointer flex-row items-center gap-1 text-xl text-gray-400 duration-100 hover:ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join our discord server
            <HiOutlineArrowNarrowRight />
          </a>
        </Link>
      </div>

      <div>
        <Image
          src="/assests/avatar.png"
          width="112"
          height="112"
          className="rounded-full"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default About;

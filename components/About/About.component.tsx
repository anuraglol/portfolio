import Image from "next/image";
import Link from "next/link";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <div className="my-8 px-3 flex flex-row items-center justify-between font-sen">
      <div>
        <p className="text-3xl text-white font-bold">Anurag</p>
        <p className="text-lg font-medium text-gray-300 mt-1">
          Frontend Developer, Blogger and a Student
        </p>

        <p className="text-gray-400 mt-4">
          Building Web apps, proficient in Frontend. Writing articles <br /> on
          my blog sometimes.
        </p>

        <Link href="https://blog.anurag.tech" passHref>
          <a
            className="cursor-pointer font-jost text-xl text-gray-400 mt-4 flex flex-row gap-1 items-center hover:ml-2 duration-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read my Blog
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

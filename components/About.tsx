import type { NextPage } from "next";
import Image from "next/image";

const About: NextPage = () => {
  return (
    <div className="grid grid-cols-auto mt-10 items-center">
      <p className="mx-6 md:mx-10 lg:mx-12 xl:mx-16 2xl:mx-20 text-lg font-poppins font-medium text-gray-500">
        <p className="font-poppins text-2xl font-semibold text-blue-600">
          /about
        </p>{" "}
        Hey There, I&apos;m Anurag <br />
        You can call me the Front-End dude! <br />
        I&apos;m a developer, blogger and a student! <br />
        Apart from coding, my hobbies include listening to music
      </p>

      <Image src="/assests/dev.svg" alt="about" height="200px" width="250px" />
    </div>
  );
};

export default About;

import Image from "next/image";

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

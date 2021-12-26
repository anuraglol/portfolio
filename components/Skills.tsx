import Image from "next/image";

const Tile = ({ text }) => {
  return (
    <div className="px-6 my-10 rounded-full py-2 grid place-items-center text-lg bg-purple-600 hover:bg-purple-500 duration-100 cursor-pointer text-white shadow-xl">
      {text}{" "}
    </div>
  );
};

const Skills = () => {
  return (
    <div className="min-w-screen -mt-12 px-8 py-2 flex justify-center flex-col font-inter font-medium"
    id="skills">
      <p className="text-center text-3xl font-mono font-semibold text-purple-600">
        skills
      </p>
      <div className="-mt-16 w-full flex justify-center">
        <Image
          src="/assests/illustration.png"
          height="330"
          width="330"
          alt="skills"
        />
      </div>
      <div className="w-full flex justify-center gap-8">
        <Tile text="NextJS" />
        <Tile text="Tailwind CSS" />
        <Tile text="Node JS" />
        <Tile text="Supabase" />
        <Tile text="Typescript" />
        <Tile text="Figma" />
      </div>
    </div>
  );
};

export default Skills;

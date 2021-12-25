import Image from "next/image";

const Tile = ({ text }) => {
  return (
    <div
      className="px-6 my-10 rounded-full py-2 grid place-items-center text-lg"
      style={{
        background: "linear-gradient(to right, #ee0979, #ff6a00)",
      }}
    >
      {text}{" "}
    </div>
  );
};

const Skills = () => {
  return (
    <div className="bg-gray px-8 py-2 flex justify-center flex-col font-inter font-medium text-white">
      <div className="w-full flex justify-center">
        <Image src="/assests/illustration.png" height="330" width="330" />
      </div>
      <div className="w-full flex justify-center gap-8">
        <Tile text="JavaScript" />
        <Tile text="React.JS" />
        <Tile text="Next.JS" />
        <Tile text="Tailwind CSS" />
        <Tile text="Node JS" />
        <Tile text="Supabase" />
      </div>
    </div>
  );
};

export default Skills;

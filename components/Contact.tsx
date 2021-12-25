import Image from "next/image";
import Link from "next/link";

const Tile = ({text}) => {
  return (
    <Link href="#" passHref>
      <button
        className="px-4 py-2 rounded-full"
        style={{
          background: "linear-gradient(to right, #ee0979, #ff6a00)",
        }}
      >
        {text}
      </button>
    </Link>
  );
};

const Contact = () => {
  return (
    <div className="bg-gray px-8 py-2 flex flex-col justify-center font-inter font-medium text-white">
      <Image src="/assests/Frame.svg" height="330" width="330" />
      <div className="w-full text-xl flex flex-row gap-8 justify-center">
        <Tile text="Github" />
        <Tile text="Twitter" />
        <Tile text="Hashnode" />
        <Tile text="Email" />
      </div>
    </div>
  );
};

export default Contact;

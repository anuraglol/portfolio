import type { NextPage } from "next";

const Skills: NextPage = () => {
  return (
    <div className="px-24 font-poppins">
      <p className="font-semibold text-blue-600 text-2xl">/skills</p>
      <div className="text-gray-500 font-medium">
        <div className="my-4">
          <p className="text-gray-600 font-semibold">languages</p>
          <ul>
            <li>javascript</li>
            <li>typescript</li>
            <li>python</li>
          </ul>
        </div>
        <div className="w-96 grid grid-cols-2 gap-8 my-4">
          <div className="flex flex-col">
            <p className="text-gray-600 font-semibold">frameworks</p>
            <ul>
              <li>nextjs</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-600 font-semibold">libraries</p>
            <ul>
              <li>reactjs</li>
              <li>express js</li>
              <li>fastapi</li>
            </ul>
          </div>
        </div>

        <div className="w-96 grid grid-cols-2 my-4 gap-8">
          <div>
            <p className="text-gray-600 font-semibold">tools</p>
            <ul>
              <li>vscode</li>
              <li>postman</li>
              <li>git</li>
              <li>github</li>
            </ul>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">css libraries</p>
            <ul>
              <li>chakra ui</li>
              <li>tailwind css</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

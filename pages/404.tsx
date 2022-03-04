import type { NextPage } from "next";

import Image from "next/image";
import { useRouter } from "next/router";

const ErrorPage: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex min-h-screen min-w-full flex-col justify-center bg-[#fafdfe]">
        <Image
          src="/assests/404.svg"
          width="800"
          height="400"
          alt="404 illustration"
        />

        <div className="flex w-full flex-col items-center justify-center">
          <p className="font-jost text-2xl font-bold text-gray-800 sm:text-3xl">
            Whoops! Lost in Space?
          </p>
          <p className="text-md text-center font-sen font-medium text-gray-700 sm:text-lg">
            The page you&apos;re looking for isn&apos;t found :( <br />
            We suggest you back to home
          </p>

          <button
            className="text-md mt-4 rounded-md bg-purple-600 px-4 py-2 font-jost font-medium text-white duration-100 hover:bg-purple-500 hover:text-gray-100 sm:px-6 sm:py-3 sm:text-lg"
            onClick={() => router.push("/")}
          >
            Back to Home
          </button>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;

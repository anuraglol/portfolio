import { FC, useState, useEffect } from "react";

import type { NowPlayingSong } from "../../@types/now-playing-song.type";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

const SpotifyCard: FC = () => {
  const [data, setData] = useState<NowPlayingSong>();
  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/api/now-playing");
      setData(res.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="px-3 py-2 bg-zinc-800 rounded-md mb-8 justify-center flex flex-row items-center gap-x-2 text-center font-sen text-lg text-gray-300">
        <Image
          src="/assests/spotify.svg"
          width="50"
          height="50"
          alt="spotify icon"
        />

        {data?.isPlaying ? (
          <Link href={data?.songUrl} passHref>
            <p className="cursor-pointer  w-4/5">
              i&apos;m currently listening to{" "}
              <span className=" text-white">{data?.title}</span>
              <p>
                by <span className=" text-white">{data?.artist}</span>
              </p>
            </p>
          </Link>
        ) : (
          <p>i&apos;m currently not listening to anything</p>
        )}
      </div>
    </>
  );
};

export default SpotifyCard;

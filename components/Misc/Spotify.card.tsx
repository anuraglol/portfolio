import { FC, useState, useEffect } from "react";

import type { NowPlayingSong } from "../../@types/now-playing-song.type";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

const SpotifyCard: FC = () => {
  const [data, setData] = useState<NowPlayingSong>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/api/now-playing");
      setData(res.data);
    };

    fetchData();
  }, []);

  axios.get("/api/now-playing").then((data) => console.log(data));

  return (
    <>
      <div className="mb-8 flex flex-row items-center gap-x-2 text-center font-sen text-lg text-gray-300">
        <Image
          src="/assests/spotify.svg"
          width="50"
          height="50"
          alt="spotify icon"
        />

        {data?.isPlaying ? (
          <Link href={data?.songUrl} passHref>
            <p className="cursor-pointer truncate">
              i&apos;m currently listening to{" "}
              <span className="truncate text-white">{data?.title}</span>
              <p>
                by <span className="truncate text-white">{data?.artist}</span>
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

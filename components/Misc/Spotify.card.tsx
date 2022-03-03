import { FC, useState, useEffect } from "react";

import type { NowPlayingSong } from "../../@types/now-playing-song.type";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

const SpotifyCard: FC = () => {
  // const DISCORD_ID = "849171428497424404";
  // const { data: activity } = useLanyard(DISCORD_ID);

  // const USERNAME = activity?.discord_user?.username;

  const [data, setData] = useState<NowPlayingSong>();
  console.log(data);

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
      <div className="font-sen mb-8 flex flex-row items-center gap-x-2 text-center text-lg text-gray-300">
        <Image src="/assests/spotify.svg" width="50" height="50" />

        {data?.isPlaying ? (
          <Link href={data?.songUrl} passHref>
            <p className="cursor-pointer">
              i&apos;m currently listening to{" "}
              <span className="text-white">{data?.title}</span>
              <p>
                by <span className="text-white">{data?.artist}</span>
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

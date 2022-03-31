import { FC } from "react";

import type { NowPlayingSong } from "../../@types/now-playing-song.type";
import Image from "next/image";
import Link from "next/link";

import useSWR from "swr";
import { fetcher } from "../../lib/fetcher";

const SpotifyCard: FC = () => {
  const { data, error } = useSWR<NowPlayingSong>("/api/now-playing", fetcher);

  return (
    <>
      <div className="font-sen mb-8 flex flex-row items-center justify-center gap-x-2 rounded-md bg-zinc-800 px-3 py-2 text-center text-lg text-gray-300">
        {data?.isPlaying ? (
          <>
            <Image
              src={data?.albumImageUrl}
              height="70"
              width="70"
              className="rounded-md"
              alt="album url"
            />

            <Link href={data?.songUrl} passHref>
              <p className="w-4/5  cursor-pointer">
                i&apos;m currently listening to{" "}
                <span className=" text-white">{data?.title}</span>
                <p>
                  by <span className=" text-white">{data?.artist}</span>
                </p>
              </p>
            </Link>
          </>
        ) : (
          <>
            <Image
              src="/assests/spotify.svg"
              width="50"
              height="50"
              alt="spotify icon"
            />
            <p>i&apos;m currently not listening to anything</p>
          </>
        )}
      </div>
    </>
  );
};

export default SpotifyCard;

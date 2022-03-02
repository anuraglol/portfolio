import { FC } from "react";

import { useLanyard } from "use-lanyard";
import Image from "next/image";

const SpotifyCard: FC = () => {
  const DISCORD_ID = "849171428497424404";
  const { data: activity } = useLanyard(DISCORD_ID);

  const USERNAME = activity?.discord_user?.username;

  return (
    <>
      <div className="font-sen mb-8 flex flex-row items-center gap-x-4 rounded-md bg-zinc-700 p-4 sm:p-6 text-white">
        <div>
          {activity?.listening_to_spotify ? (
            <Image
              src={activity?.spotify?.album_art_url}
              alt="album cover"
              width={100}
              height={100}
              className="rounded-md"
            />
          ) : (
            <Image
              src="/assests/spotify.svg"
              alt="spotify icon"
              width={60}
              height={60}
            />
          )}
        </div>

        <div className="flex flex-col">
          {activity?.listening_to_spotify ? (
            <>
              <div className="text-xl font-bold">
                {USERNAME} is listening to
              </div>

              <div className="font-semibold">{activity?.spotify?.song}</div>

              <div className="font-medium">by {activity?.spotify?.artist}</div>
            </>
          ) : (
            <div>{USERNAME} is not listening to anything</div>
          )}
        </div>
      </div>
    </>
  );
};

export default SpotifyCard;

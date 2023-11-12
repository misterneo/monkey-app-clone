import React, { useContext } from "react";
import { LuVideo } from "react-icons/lu";
import { VideoProvider } from "@/utils/constants";
import { useSelector } from "react-redux";
import { BiUser } from "react-icons/bi";

export const StartVideoChatOverlay = () => {
  const { join } = useContext(VideoProvider);
  const onlineUsersCount = useSelector((state) => state.main.onlineUsersCount);

  return (
    <div className="flex h-full items-center justify-center flex-col">
      <BiUser className="md:text-4xl text-2xl mb-2 text-yellow-400" />

      <p className="text-center text-white sm:text-lg text-sm sm:mb-16 mb-8 ">
        {onlineUsersCount === 1
          ? "You are the only user online"
          : onlineUsersCount === 2
          ? `${onlineUsersCount - 1} user online`
          : `${onlineUsersCount - 1} users online`}
      </p>

      <button
        className="bg-[#fffc03] text-black sm:text-base text-[.9rem] sm:px-14 sm:py-4 py-3 px-8 rounded-full font-medium flex items-center gap-3 hover:bg-[#fff06b] hover:text-black"
        onClick={async () => await join()}
      >
        <LuVideo className="md:text-2xl text-xl" />
        Start Video Chat
      </button>
    </div>
  );
};

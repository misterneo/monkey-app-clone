import React, { useContext } from "react";
import { LuVideo } from "react-icons/lu";
import { VideoProvider } from "@/utils/constants";

export const StartVideoChatOverlay = () => {
  const { join } = useContext(VideoProvider);

  return (
    <div className="flex h-full items-center justify-center">
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

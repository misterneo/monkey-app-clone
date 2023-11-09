import React, { useContext } from "react";
import { LuVideo } from "react-icons/lu";
import { VideoProvider } from "@/features/video/useVideo";

export const StartVideoChatOverlay = () => {
  const { startVideoStream } = useContext(VideoProvider);
  return (
    <div className="flex h-full items-center justify-center">
      <button
        className="bg-[#fffc03] text-black md:text-base text-sm px-14 py-4 rounded-full font-medium flex items-center gap-3 hover:bg-[#fff06b] hover:text-black"
        onClick={startVideoStream}
      >
        <LuVideo size={24} />
        Start Video Chat
      </button>
    </div>
  );
};

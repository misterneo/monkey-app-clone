import React, { useContext } from "react";
import { BiSolidSend } from "react-icons/bi";
import { ClearChatButton } from "./ClearChatButton";
import { VideoProvider } from "@/utils/constants";

export const MessageInput = () => {
  const { send } = useContext(VideoProvider);

  return (
    <form className="text-white flex gap-3" onSubmit={send}>
      <div className="relative flex-1">
        <input
          className="w-full h-12 px-4 rounded-full bg-[#00000052] text-white placeholder-gray-300 text-xs focus:outline-none pr-10"
          type="text"
          placeholder="Send Message"
        />
        <button
          type="submit"
          className="absolute right-4 top-1/3 text-gray-300"
        >
          <BiSolidSend size={16} />
        </button>
      </div>

      <ClearChatButton />
    </form>
  );
};

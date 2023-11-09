import React from "react";
import { BiSolidSend } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addMessage } from "../messagingSlice";
import { ClearChatButton } from "./ClearChatButton";

export const MessageInput = () => {
  const dispatch = useDispatch();
  return (
    <form
      className="text-white flex gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addMessage(e.target[0].value));
        e.target[0].value = "";
      }}
    >
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

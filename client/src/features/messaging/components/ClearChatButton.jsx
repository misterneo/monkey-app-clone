import React from "react";
import { AiOutlineClear } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { clearMessages } from "../messagingSlice";

export const ClearChatButton = () => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(clearMessages())}
      type="button"
      className="w-12 h-12 rounded-full bg-[#00000052] flex items-center justify-center text-gray-200 font-medium"
    >
      <AiOutlineClear size={16} />
    </button>
  );
};

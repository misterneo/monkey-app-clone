import React from "react";
import { GiMonkey } from "react-icons/gi";

export const MessageBubble = ({ message }) => {
  return (
    <div
      className={`flex items-center gap-2 ${
        message.isMine ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
        <GiMonkey color="gold" size={18} />
      </div>

      <div className="text-white text-xs bg-[#00000048] p-2 rounded-md max-w-[200px] break-words">
        {message.text}
      </div>
    </div>
  );
};
